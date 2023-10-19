import styled from 'styled-components'

export const ContactWrap = styled.div`
  display:flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.colors.bgTop};
  border-radius: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.shadows.regular};

  position: relative;
  
`;

export const ButtonDel = styled.button`
  background: transparent;
  border: 1px solid ${({theme})=> theme.colors.dark};
  border-radius:  ${({theme})=> theme.spacing(2)};
  position: absolute;
  top:${({theme})=> theme.spacing(1)};
  right:${({theme})=> theme.spacing(1)};

  padding: ${({ theme }) => theme.spacing(2)};
  transition: transform ${({ theme }) => theme.animation.cubicBezier};
  transform: scale(0.9);

  &:hover,
  &:focus {
    transform: scale(1);
    background: ${({theme})=> theme.colors.primary}
  }
`;

export const ButtonEdit = styled.button`
  position: absolute;
  bottom: ${({theme})=> theme.spacing(1)};
  right:${({theme})=> theme.spacing(1)};
  background: transparent;
  border: 1px solid ${({theme})=> theme.colors.dark};
  border-radius:  ${({theme})=> theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  transition: transform ${({ theme }) => theme.animation.cubicBezier};
  transform: scale(0.9);

  &:hover,
  &:focus {
    transform: scale(1);
    background: ${({theme})=> theme.colors.primary}
  }
`;

export const TextContact = styled.div`
    color: ${({theme})=> theme.colors.light};
    font-size:${({theme})=> theme.fontSizes.medium};
    `