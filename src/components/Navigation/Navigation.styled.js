import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;

  transform: scale(0.7);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.bgTop};
    padding: 6px 12px;
    border-radius: 4px;
    transform: scale(0.9);
    pointer-events: none;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-left: ${({ theme }) => theme.spacing(7)};
`;