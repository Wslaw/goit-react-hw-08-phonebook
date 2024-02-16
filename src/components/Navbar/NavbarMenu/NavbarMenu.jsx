import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';
import menuItems from './menuItems';
import styles from './navbar-main-menu.module.css';


const MainMenu = () => {
  const isLogin = useSelector(selectIsLogin);


  const filteredMenuItems = !isLogin ? menuItems.filter((item ) => !item.private) : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={styles.link} to={to}>
        {text}
      </NavLink>
    </li>
  ));

    return (
      <ul className={styles.menu}>
        {elements}
        {/* <li>
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
        
        </div> */}
      </ul>
    );
}

export default MainMenu;
