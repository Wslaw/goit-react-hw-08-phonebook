import { useSelector, useDispatch } from 'react-redux';
import LoginForm from 'components/LogiForm/LoginForm';
// import { Navigate } from 'react-router-dom';
import {
  selectAuthError,
  selectAuthLoading,
  // selectIsLogin,
} from '../../redux/auth/auth-selectors';

import { login } from '../../redux/auth/auth-operations';

import styles from './login-page.module.css';
const LoginPage = () => {


  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  // const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  // if (isLogin) {
  //   return <Navigate to="/contacts" />;
  // } 



  return (
    <div>
      <h1 className={styles.title}>Login page</h1>
      {authLoading && <p>.....Register in progress</p>}

      <LoginForm onSubmit={handleLogin} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </div>
  );
};

export default LoginPage;
