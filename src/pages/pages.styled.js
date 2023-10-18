import styled from 'styled-components';


export const HomePage = styled.div`
  width: 100%;
  height: 80%;
  border: 10px ridge black;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 20px;

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
 right: 10px;

 width:50%;
 font-size: 14px;
 display:flex;
 flex-direction:column;
 align-items:center;

 @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;


export const ContactPage = styled.div`
 display:flex;
 flex-direction: column;
 gap: 12px;
 width: 100%;
`;