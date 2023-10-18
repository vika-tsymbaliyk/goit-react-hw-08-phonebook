import styled from "styled-components"

export const AppBarStyled = styled.header`
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  /* background-color: ${({ theme }) => theme.colors.bg}; */
`;