import styled from 'styled-components'

export const Container = styled.div`
  /* margin: o auto; */
  min-height: calc(100vh - 50px);
  /* display: flex; */
  width:100%;

  background-color: ${({ theme }) => theme.colors.bg};

  @media screen and  ( ${({ theme }) => theme.media.mobile}) {
    max-width: 768px;
  }
  @media screen and ( ${({ theme }) => theme.media.tablet}) {
    max-width: 1240px;
  }
  @media screen and ( ${({ theme }) => theme.media.laptop}) {
    min-width: 1440px;
  }
`;