import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const UserMenuText = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transform: scale(0.9);

`;

export const BtnLogOut = styled.button`
  border: none;
  background: transparent;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;