import {useSelector, useDispatch } from 'react-redux';

import SignUpForm from '../../components/SignUpForm/SignUpForm';

import { signup } from '../../redux/auth/auth-operations';
import { selectAuthError,  selectAuthLoading} from '../../redux/auth/auth-selectors';
// import Loader from 'components/Loader/Loader';
// import { Navigate } from 'react-router-dom';
import styles from './signup-page.module.css';

const SignUpPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();
  
  const handleSignup = data => {
    dispatch(signup(data))

  }

  return (
    <div className={styles.wrap}>
      <div className={styles.block}>
        <h1 className={styles.title}>Registration page.</h1>
        <p className={styles.text}>Please sign up.</p>
        {authLoading && <p>.....Login in progress</p>}
        <SignUpForm onSubmit={handleSignup} />
        {authError && <p className={styles.error} style={{ color: 'red' }}>{authError}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
