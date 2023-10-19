import { deleteContact } from "redux/contacts/operations";
import { ContactWrap, ButtonDel, ButtonEdit, TextContact } from "./Contact.styled";
import { useDispatch} from "react-redux";
import { ContactEditor } from "components/ContactEditor/ContactEditor";
import { useState } from "react";
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'

export const Contact = ({contact })=>{

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleEditClose = () => {
    setIsEdit(false);
  };
  
    const {id, name, number} = contact;
    return(
    <ContactWrap>
        <TextContact>{name}</TextContact>
        <TextContact>{number}</TextContact>
        <ButtonDel onClick={()=> dispatch(deleteContact(id))}><AiOutlineDelete size={16}/></ButtonDel>
        <ButtonEdit onClick={handleEditClick}><AiOutlineEdit size={16}/></ButtonEdit>
        {isEdit && (
          <ContactEditor
            isOpen = {isEdit}
          contact={{ id, name, number }}
          onClose={handleEditClose}
        />
      )}
    </ContactWrap>
    )
}