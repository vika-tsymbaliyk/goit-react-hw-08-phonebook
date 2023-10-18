import { Container} from 'components/Container/Container.styled';
import { HomePage, ImgStyle, TextWrap } from './pages.styled';
import image from '../images/pngwing.com.png'



  export default function Home() {

    return (
      <Container>
        <HomePage>
          <ImgStyle src={image} alt=''/>
          <TextWrap>
            <p>Welcome to</p>
            <h1>  Phonebook </h1>
            <p>application for convenient storage of your contacts. Click "Register" if you are here for the first time or "Log in" if you are already registered</p>
          </TextWrap>
        </HomePage>
      </Container>
    );
  }
  