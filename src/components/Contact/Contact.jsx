import { deleteContact } from "redux/contacts/operations";
import { ContactWrap, ButtonDel } from "./Contact.styled";
import { useDispatch} from "react-redux";
import { ContactEditor } from "components/ContactEditor/ContactEditor";
import { useState } from "react";

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
        <p>{name}: {number}</p>
        <ButtonDel onClick={()=> dispatch(deleteContact(id))}>Delete</ButtonDel>
        <button onClick={handleEditClick}>edit </button>
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