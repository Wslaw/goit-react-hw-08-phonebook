import { Link } from 'react-router-dom';
import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> This is  the "Phonebook" app.</h1>
      <div className={styles.wrap}>
        <p className={styles.link}>
          To get started, <Link to="/login"> log in </Link> or{' '}
          <Link to="/register">register</Link>.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
