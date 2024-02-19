import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


import styles from './phonebook.module.css';

const Phonebook = () => {

  return (
    <div
      className={styles.body}
    >
      <div className={styles.container}>
        <div className={styles.wrapper_book}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <div className={styles.filter}>
            <p className={styles.text}>Find contacts by name</p>
            <Filter />
          </div>
        </div>
        <div className={styles.wrapper_contacts}>
          <h2 className={styles.titleText}>Your contacts:</h2>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Phonebook;
