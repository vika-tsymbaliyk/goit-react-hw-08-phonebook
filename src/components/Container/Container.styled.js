import styled from 'styled-components'

export const Container = styled.div`
  /* margin: o auto;
  min-height: calc(100vh - 50px);
  display: flex;
  width: 100% ;
  max-width: 1200px;
  width: ${({ theme }) => theme.spacing(100)};

  background-color: ${({ theme }) => theme.colors.bg};

  @media ( ${({ theme }) => theme.media.tablet}) {
    max-width: ${({ theme }) => theme.spacing(192)}
  };

  @media ( ${({ theme }) => theme.media.laptop}) {
    max-width: ${({ theme }) => theme.spacing(300)}
  } */


  width: 380px;
  height: 550px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;


  @media (min-width: 768px) {
    width: 780px;
    height: 900px;
  }
  @media (min-width: 1200px) {
    width: 1180px;
    height: 1300px;
  }
`;

