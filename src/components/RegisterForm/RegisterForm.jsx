import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik } from "formik";
import { BtnAddContact, Input, Label, PhonebookForm } from 'components/ContactForm/ContactForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    dispatch(register({ name, email, password }));
    actions.resetForm();
  };

  return (
    <Formik
    initialValues={
      {
          name: "",
          email: "",
          password:""
      }}
    onSubmit={(contact, actions)=>handleSubmit(contact, actions)}
    >
       <PhonebookForm>
        <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
          <BtnAddContact type="submit">Register</BtnAddContact>
        </PhonebookForm>
    </Formik>
  );
};
