import { addContacts } from '../../redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectContacts);

  const handlerSubmit = event => {
    event.preventDefault();
    const contact = {
      name: event.target.elements.name.value,
      phone: event.target.elements.phone.value,
    };

    const isCoincidence = stateContacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isCoincidence) {
      alert(`${contact.name} is already in contacts`);
      event.target.reset();
      return;
    }
    dispatch(addContacts(contact));
    event.target.reset();
  };

  return (
    <form
      className={`${css.contactForm} ${css.block}`}
      onSubmit={handlerSubmit}
    >
      <label className={css.block}>
        Name
        <input
          className={css.block}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.block}>
        phone
        <input
          className={css.block}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="Submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
