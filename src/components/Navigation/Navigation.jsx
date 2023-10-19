import { useAuth } from 'hooks';
import {BiHomeAlt} from 'react-icons/bi'
import {} from 'react-icons/ci'
import { NavStyled, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavStyled>
      <NavLinkStyled to="/">
       <BiHomeAlt size={16}/> Home
      </NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled to="/contacts">
          Contacts
        </NavLinkStyled>
      )}
    </NavStyled>
  );
};
