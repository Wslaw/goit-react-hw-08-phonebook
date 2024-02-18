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
  // const isLogin = useSelector(selectIsLogin)

  const dispatch = useDispatch();
  
  const handleSignup = data => {
    dispatch(signup(data))

  }

//   if (isLogin) {
//   return <Navigate to="/contacts" />
// }

  return (
    <div>
      <h1 className={styles.title}>Registration page.</h1>
      <p className={styles.text}>Please sign up.</p>
      {authLoading && <p>.....Login in progress</p>}
      <SignUpForm onSubmit={handleSignup} />
      {authError && <p style={{ color: "red" }}>{authError}</p>}
    </div>
  );
};

export default SignUpPage;
