import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik } from "formik";
import { BtnAddContact, Input, Label, PhonebookForm } from 'components/ContactForm/ContactForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;

    dispatch( logIn ({ email, password }));
    actions.resetForm();
  };

  return (
    
    <Formik 
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}>
        <PhonebookForm>
          <Label>
            Email
            <Input type="email" name="email" />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
          </Label>
          <BtnAddContact type="submit">Log In</BtnAddContact>
        </PhonebookForm>
      </Formik>
  );
};
