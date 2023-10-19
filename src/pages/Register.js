import { Container } from 'components/Container/Container.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterPageWrap, Text } from './pages.styled';
import { NavLinkStyled } from 'components/Navigation/Navigation.styled';

export default function Register() {
  return (
    <Container>
      <RegisterPageWrap>
      <RegisterForm />
      <Text >
        Already registered?
        <NavLinkStyled to="/login">
          Log In
        </NavLinkStyled>
      </Text>
      </RegisterPageWrap>
    </Container>
  );
}
