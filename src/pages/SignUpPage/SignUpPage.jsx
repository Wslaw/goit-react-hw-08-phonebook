import SignUpForm from 'components/SignUpForm/SignUpForm';

import styles from './signup-page.module.css';


const SignUpPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Registration page.</h1>
      <p className={styles.text}>Please sign up.</p>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
