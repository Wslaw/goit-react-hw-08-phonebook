import styles from './shared-layout.module.css';

import Navbar from 'components/Navbar/Navbar';
// import MainMenu from 'components/MainMenu/MainMenu';
import { Outlet } from 'react-router-dom';



const SharedLayout = () => {
  return (
    <>
          <Navbar />
          <Outlet />
    </>
  );
};

export default SharedLayout;
