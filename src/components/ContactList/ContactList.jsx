import ContactListItem from '../ContactListItem/ContactListItem.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectFilter,
} from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const renderFilteredContacts = filteredContacts.length > 0 || isLoading;
  const notFilteredContacts =
    filteredContacts.length === 0 && contacts.length > 0;

  return (
    <div>
      {renderFilteredContacts && (
        <ul className={css.contactList}>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      )}
      {notFilteredContacts && (
        <p className={css.warning}>
          There are not such contacts in this phonebook
        </p>
      )}
      {contacts.length === 0 && (
        <p className={css.warning}>There are not contacts in this phonebook</p>
      )}
    </div>
  );
};

export default ContactList;
