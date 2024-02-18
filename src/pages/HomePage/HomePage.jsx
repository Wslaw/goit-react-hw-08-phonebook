import { Link } from 'react-router-dom';
import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Choose our product "Phonebook". It's not the best, but it's reliable!
      </h1>
      <p className={styles.link}>
        To get started, <Link to='/login'>log in</Link> or <Link to='/register'>register</Link>.
      </p>
    </div>
  );
};

export default HomePage;
