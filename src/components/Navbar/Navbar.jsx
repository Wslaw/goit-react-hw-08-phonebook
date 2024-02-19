import NavbarMenu from 'components/Navbar/NavbarMenu/NavbarMenu';
import { Link } from 'react-router-dom';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

import styles from './navbar.module.css';
import logo from '../../images/icon-phonebok.png';

const Navbar = () => {
const isLogin = useSelector(selectIsLogin);


    // const isLogin = false
    
    return (
      <>
        <div className={styles.navbar}>
          <Link to="/">
            <img src={logo} alt="Logo" width='32'/>
          </Link>
          <div className={styles.menu}>
            <NavbarMenu />
            {isLogin ? <NavbarUser /> : <NavbarAuth />}
          </div>
        </div>
      </>
    );
}

export default Navbar;

