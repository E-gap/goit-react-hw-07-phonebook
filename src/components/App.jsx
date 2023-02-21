import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOperations';
import { selectError, selectIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: '50px',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h2>Loading contacts....</h2>}
      {error ? (
        <h2 style={{ color: 'red' }}>An error occured: {error}</h2>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
