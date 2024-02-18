
import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div>
          <h1 className={styles.title}>Cannot found this page</h1>
          <Link className={styles.link} to='/'>To Home page</Link>

    </div>
  );
};

export default NotFoundPage;
