import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Phonebook from './Phonebook/Phonebook';
import SharedLayout from './SharedLayout/SaredLayout';
import LoginPage from '../pages/LoginPage/LoginPage';
import HomePage from '../pages/HomePage/HomePage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import Snowfall from "./Snowfall/Snowfall";

// const isWinterMonth = () => {
//   const currentDate = new Date();
//   const month = currentDate.getMonth() + 1;
//   return month === 12 || month === 1 || month === 2;
// }
const AppRoutes = () => {
  //    const isWinter = isWinterMonth();

  return (
    <div>
      <Routes>
              <Route path="/" element={<SharedLayout />}>
                  <Route index element={<HomePage/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="contacts" element={<Phonebook />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        {/* {isWinter && <Snowfall />} */}
      </Routes>
    </div>
  );
};
export default AppRoutes;