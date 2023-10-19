import { Container } from 'components/Container/Container.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginPageWrap } from './pages.styled';

export default function Login() {
  return (
    <Container>
      <LoginPageWrap>
      <LoginForm />
      </LoginPageWrap>
    </Container>
  );
}
