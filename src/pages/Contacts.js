import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      {/* <TaskEditor /> */}
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
