import styles from './navbar-user.module.css';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





const NavbarUser = () => {
    
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/');
    };

    const {name} = useSelector(selectUser);
    return (
        <div className={styles.block}>
            <p>Hello, </p>
          {name}
            <button onClick={handleClick} className={styles.btn}>
                Logout
            </button>
        </div>
    )
}

export default NavbarUser;
