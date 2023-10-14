import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, logOut } from "./operations";

const contactsSlice = createSlice({
    name: "contacts",  
    initialState: {
                    items: [],
                    isLoading: false,
                    error: null
                  },
    extraReducers: {
      /// Fetch
    
          [fetchContacts.pending](state) {
            state.isLoading = true
          },
          [fetchContacts.fulfilled](state, action) {
            state.items = action.payload;
            state.isLoading = false;
          },
          [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
          /// Add
          [addContact.pending](state) {
            state.isLoading = true
          },
          [addContact.fulfilled](state, action) {
            state.items.push(action.payload);
            state.isLoading = false;
          },
          [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
            /// Delete
          [deleteContact.pending](state) {
            state.isLoading = true
          },
          [deleteContact.fulfilled](state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
            state.isLoading = false;
          },
          [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
          [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
          },
        },
      });
              
              
              
export const contactsReducer = contactsSlice.reducer;