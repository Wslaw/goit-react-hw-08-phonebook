import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import winter from '../../images/winter.jpg';
// import summer from '../../images/summer.jpg';

import styles from './phonebook.module.css';


// const isWinterMonth = () => {
//   const currentDate = new Date();
//   const month = currentDate.getMonth() + 1;
//   return month === 12 || month === 1 || month === 2;
// };


const Phonebook = () => {


  // const isWinter = isWinterMonth();
  // const backgroundImage = isWinter ? winter : summer;

  return (
    <div
      className={styles.body}
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.container}>
        <div className={styles.wrapper_book}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <p className={styles.text}>Find contacts by name</p>

          <Filter />
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
