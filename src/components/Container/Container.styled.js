import styled from 'styled-components'

export const Container = styled.div`
  
  width: ${({ theme }) => theme.spacing(95)};
  height: 550px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media ( ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(195)};
    height: 900px;
  };

  @media ( ${({ theme }) => theme.media.laptop}) {
    width: ${({ theme }) => theme.spacing(300)};
    height: 1300px;
  } 
`;

