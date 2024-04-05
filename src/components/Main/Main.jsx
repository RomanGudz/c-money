import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../Auth';
import NotPage from '../NotPage';
// import style from './Main.module.css';

export const Main = () => {
  console.log();
  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='*' element={<NotPage />} />
      <Route path='/' />
    </Routes>);
};
