import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../Auth';
import NotPage from '../NotPage';
import Home from '../Main/Home';
import Exchange from '../Exchange';
import { CheckUser } from '../CheckUser/CheckUser';
import Layout from '../Layout';
// import style from './Main.module.css';

export const Main = () => {
  console.log();
  return (
    <Layout>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<NotPage />} />
        <Route path='/currencies' element={<Home />} />
        <Route path='/account/:id' element={<CheckUser />} />
        <Route path='/exchange' element={<Exchange />} />
      </Routes>
    </Layout>
  );
};
