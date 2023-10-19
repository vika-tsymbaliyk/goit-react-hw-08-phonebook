import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { BtnLogOut, UserMenuText, UserMenuWrap } from './UserMenu.styled';
import {BiExit} from 'react-icons/bi'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrap>
      <UserMenuText >Welcome, {user.name}</UserMenuText>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        <BiExit size={20}/>
      </BtnLogOut>
    </UserMenuWrap>
  );
};