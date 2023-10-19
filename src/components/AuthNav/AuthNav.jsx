import { NavLinkStyled, NavStyled } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/register">
        Register
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        Log In
      </NavLinkStyled>
    </NavStyled>
  );
};