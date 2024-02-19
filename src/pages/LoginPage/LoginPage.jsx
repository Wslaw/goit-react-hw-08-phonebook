import { useSelector, useDispatch } from 'react-redux';
import LoginForm from 'components/LogiForm/LoginForm';
import {
  selectAuthError,
  selectAuthLoading,
} from '../../redux/auth/auth-selectors';

import { login } from '../../redux/auth/auth-operations';

import styles from './login-page.module.css';
const LoginPage = () => {


  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };



  return (
    <div className={styles.wrap}>
      <div className={styles.block}>
        <h1 className={styles.title}>Login page</h1>
        {authLoading && <p>.....Register in progress</p>}

        <LoginForm onSubmit={handleLogin} />
        {authError && <p style={{ color: 'red' }}>{authError}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
