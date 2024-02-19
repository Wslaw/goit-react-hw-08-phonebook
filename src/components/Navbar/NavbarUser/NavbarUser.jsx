import styles from './navbar-user.module.css';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';




const NavbarUser = () => {
    
    
  const dispatch = useDispatch();
  
  const onLogout = () => {
    dispatch(logout());
  }
   

    const  user  = useSelector(selectUser);
    // const  name  = user ? user.name : "";

    return (
      <div className={styles.block}>
        <p className={styles.text}> {user && user.email}.</p>

        <button onClick={onLogout} className={styles.btn}>
          Logout
        </button>
      </div>
    );
}

export default NavbarUser;
