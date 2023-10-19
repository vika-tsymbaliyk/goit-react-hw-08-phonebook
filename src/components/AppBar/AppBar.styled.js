import styled from "styled-components"

export const AppBarStyled = styled.header`
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: space-between;

`;