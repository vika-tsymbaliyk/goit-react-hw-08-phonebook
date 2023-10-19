import styled from 'styled-components'

import { Field, Form, ErrorMessage } from "formik";

export const PhonebookForm = styled(Form)`
  display:flex;
  flex-direction:column;
  gap: 15px;
  border: 1px solid black;
  border-radius:5px;
  padding: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Input = styled(Field)`
 
`;
export const BtnAddContact = styled.button`
  color: ${({ theme }) => theme.colors.light};
  background: ${({theme})=> theme.colors.bgTop};
  letter-spacing: 0.06em;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(1)};
  padding: 8px 12px;

&:hover,
&:focus {
  background-color: ${({ theme }) => theme.colors.primary};
}
`;

export const ErrorMsg = styled(ErrorMessage)`
color: red;
font-size:12px;  
`;