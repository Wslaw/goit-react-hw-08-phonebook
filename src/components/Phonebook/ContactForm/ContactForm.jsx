import { selectAllContacts } from '../../../redux/contacts/contacts-selectors';
import { useDispatch, useSelector } from 'react-redux';
import styles from './contactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { addContact } from '../../../redux/contacts/contacts-operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const nameInput = e.target.elements.name;
    const numberInput = e.target.elements.number;

    const normalizedName = nameInput.value.toLowerCase();

    // console.log(contacts.items);
    const isDuplicate = contacts.items.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isDuplicate) {
      Notiflix.Notify.failure(
        `${nameInput.value} is already in the phone book.`
      );

      e.target.reset();
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name: nameInput.value,
          phone: numberInput.value,
        })
      );
      e.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperName}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              id="name"
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter Name"
            />
          </div>
          <div className={styles.wrapperNumber}>
            <label htmlFor="number" className={styles.formLabel}>
              Number
            </label>
            <input
              id="number"
              className={styles.input}
              type="tel"
              name="number"
              pattern="[0-9\+\-]*"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter contact"
            />
          </div>
          <button type="submit" className={styles.btn}>
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
