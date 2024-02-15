import NavbarMenu from 'components/Navbar/NavbarMenu/NavbarMenu';
import { Link } from 'react-router-dom';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import styles from './navbar.module.css';


const Navbar = () => {
    const isLogin = false
    
    return (
        <>
            <navbar className={styles.navbar}>
                <Link to = "/">Logo</Link>
                <NavbarMenu />
                {isLogin ? <NavbarUser /> : <NavbarAuth />}
            </navbar>
        </>
    )
}

export default Navbar;

