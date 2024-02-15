import NavbarMenu from 'components/Navbar/NavbarMenu/NavbarMenu';
import { Link } from 'react-router-dom';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import styles from './navbar.module.css';


const Navbar = () => {
    const isLogin = false
    
    return (
        <>
            <div className={styles.navbar}>
                <Link to = "/">Logo</Link>
                <NavbarMenu />
                {isLogin ? <NavbarUser /> : <NavbarAuth />}
            </div>
        </>
    )
}

export default Navbar;

