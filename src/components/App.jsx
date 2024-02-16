import React from 'react';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from '../redux/auth/auth-operations';

import AppRoutes from './AppRoutes';

import styles from './app.module.css'

export const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(current())
}, [dispatch]);
  
  return (
    <div className={styles.container}>
      <AppRoutes />     
    </div>
  );
};
