import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Loader from './Loader/Loader';

import SharedLayout from './SharedLayout/SaredLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const Phonebook = lazy(() => import('./Phonebook/Phonebook')); 
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage')); 
const HomePage = lazy(() => import('../pages/HomePage/HomePage')); 
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage')); 

const AppRoutes = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route element={<PublicRoute/>}>
            <Route
              path="login"
              element={
                <Suspense fallback={<Loader />}>
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense fallback={<Loader />}>
                  <SignUpPage />
                </Suspense>
              }
            />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route
              path="contacts"
              element={
                <Suspense fallback={<Loader />}>
                  <Phonebook />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppRoutes;