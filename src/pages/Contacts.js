import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/Container/Container.styled';
import { Filter } from 'components/Filter/Filter';
import { CenterDiv, ContactPage } from './pages.styled';
import Loader from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactPage>
      <ContactForm />
      <CenterDiv>{isLoading && <Loader/>}</CenterDiv>
      
      <Filter/>
      <ContactList />
      </ContactPage>
    </Container>
  );
}
