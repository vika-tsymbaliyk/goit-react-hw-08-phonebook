import styled from 'styled-components';

    // HOME PAGE

export const HomePage = styled.div`
  width: 100%;
  height: 80%;
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dark};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(5)};
`;
export const ImgStyle = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const TextWrap = styled.div`
 position: absolute;
 top: 20%;
 right: ${({ theme }) => theme.spacing(2.5)};
 width:50%;
 font-size:  ${({ theme }) => theme.fontSizes.small};
 display:flex;
 flex-direction:column;
 align-items:center;

 @media ( ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.medium}
  }
  @media ( ${({ theme }) => theme.media.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.large}
  }
`;

// CONTACTS PAGE

export const ContactPage = styled.div`
 display:flex;
 flex-direction: column;
 gap: ${({ theme }) => theme.spacing(3)};
 width: 100%;
 padding: ${({ theme }) => theme.spacing(5)};
`;
export const CenterDiv = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;

 // LOGIN PAGE

 export const LoginPageWrap = styled.div`
   padding: ${({ theme }) => theme.spacing(6)};
 `;

 // REGISTER PAGE

 export const RegisterPageWrap = styled.div`
   padding: ${({ theme }) => theme.spacing(6)};
   display: flex;
   flex-direction: column;
   align-items:center;
 `;
 export const Text = styled.p`
   color: ${({ theme }) => theme.colors.dark};
   font-size: ${({ theme }) => theme.fontSizes.medium};
 `;