import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import { Formik } from "formik";
// import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//   .test(
//     "name",
//     "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
//   )
//   .required('Required'),
//   number: Yup.string()
//   .test(
//     "number",
//     "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
//     value =>/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(value)
//   )
//   .required('Required'),
// });


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    // <Formik
    // initialValues={
    //   {
    //       name: "",
    //       email: "",
    //       password:""
    //   }}
      
    // validationSchema={SignupSchema}
    // onSubmit={(contact, actions)=>handleSubmit(contact, actions)}
    // >

    // </Formik>


    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label >
        Email
        <input type="email" name="email" />
      </label>
      <label >
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
