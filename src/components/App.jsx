import React from 'react';

import AppRoutes from './AppRoutes';

import styles from './app.module.css'

export const App = () => {
  
  return (
    <div className={styles.container}>
      <AppRoutes />     
    </div>
  );
};
