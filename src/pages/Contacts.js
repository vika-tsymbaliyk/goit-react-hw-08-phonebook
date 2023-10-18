import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/Container/Container.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactPage } from './pages.styled';

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
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter/>
      <ContactList />
      </ContactPage>
    </Container>
  );
}
