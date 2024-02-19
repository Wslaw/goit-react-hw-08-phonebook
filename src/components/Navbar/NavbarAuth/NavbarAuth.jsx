import { NavLink } from 'react-router-dom';

import styles from './navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.block}>
      <NavLink className={styles.link} to="/login">
        Log in
      </NavLink>
      
      <NavLink className={styles.link} to="/register">
        Sign Up
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
