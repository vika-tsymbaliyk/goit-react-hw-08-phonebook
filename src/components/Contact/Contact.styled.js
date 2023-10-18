import styled from 'styled-components'

export const ContactWrap = styled.div`
  /* display:flex;
  flex-direction: row;
  gap: 10px; */
  padding: ${({ theme }) => theme.spacing(10)};
  /* background-color: ${({ theme }) => theme.colors.light}; */
  background-color: lightskyblue;
  border-radius: ${({ theme }) => theme.spacing(2)};

  /* color: ${({ theme }) => theme.colors.gray}; */
  color: gray;
  box-shadow: ${({ theme }) => theme.shadows.regular};

  position: relative;
  
`;

export const ButtonDel = styled.button`
  font-size:14px;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;