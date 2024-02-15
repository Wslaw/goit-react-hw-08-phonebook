import MainMenu from 'components/MainMenu/MainMenu';
import { Link } from 'react-router-dom';

import styles from './navbar.module.css';

const Navbar = () => {
    
    return (
        <>
            <navbar className={styles.navbar}>
                <Link to = "/">Logo
                </Link>
                <MainMenu />
            </navbar>
        </>
    )
}

export default Navbar;

