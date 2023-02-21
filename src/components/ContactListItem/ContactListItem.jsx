import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsOperations';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.listItem}>
      <div>
        <span className={css.icon}>
          <BsFillCircleFill
            style={{
              height: '20px',
              width: '20px',
            }}
          />
        </span>
        {name}: {phone}
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContacts(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
