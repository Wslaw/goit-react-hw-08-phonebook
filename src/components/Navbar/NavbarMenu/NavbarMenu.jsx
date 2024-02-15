import {  NavLink } from 'react-router-dom';

import styles from './navbar-main-menu.module.css';


const MainMenu = () => {
    
    return (
      <ul className={styles.menu}>
        <li>
          <NavLink className={styles.link} to="/">
            Home page
          </NavLink>
        </li>
        <div className={styles.nav}>
          <li>
            <NavLink className={styles.link} to="/contacts ">
              Contacts
            </NavLink>
          </li>
          {/* <li>
            <NavLink className={styles.link} to="/login ">
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/register ">
              Sign up
            </NavLink>
          </li> */}
        </div>
      </ul>
    );
}

export default MainMenu;
