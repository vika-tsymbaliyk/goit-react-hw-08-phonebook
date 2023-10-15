import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import Modal from "react-modal";
import { SignupSchema } from "components/ContactForm/ContactForm";
import { editContact } from 'redux/contacts/operations';
import { Label, ErrorMsg, Input, PhonebookForm} from "components/ContactForm/ContactForm.styled";
import { customStyles } from './ContactEditor.styled';

export const ContactEditor = ({ isOpen, contact, onClose }) => {
  const dispatch = useDispatch();
  
  const handleEditSubmit = (contact,action)=>{
    dispatch(editContact(contact));
    onClose();
  }

 

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      style={customStyles}>
    <div>
        <h2>Edit Contact</h2>
        <Formik
              initialValues={
                {
                    id: contact.id,
                    name: contact.name,
                    number: contact.number,
                }}
                
              validationSchema={SignupSchema}
              onSubmit={(contact)=>handleEditSubmit(contact)}
              >

            <PhonebookForm>
              <Label>Name
              <Input name="name" type="text"/>
              <ErrorMsg name="name" component="span"/>
              </Label>
              
              <Label>Number
              <Input name="number" type="tel"/>
              <ErrorMsg name="number" component="span"/>
              </Label>

            <button type="submit">
                Edit contact
              </button>
              <button onClick={onClose}>Close</button>
            </PhonebookForm>
       </Formik>
  </div>
</Modal>

  );
};
