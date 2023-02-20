import ContactListItem from '../ContactListItem/ContactListItem.jsx';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts.length > 0 || isLoading ? (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  ) : (
    <p className={css.warning}>There are not such contacts in this phonebook</p>
  );
};

export default ContactList;
