import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import { ReactComponent as Logo } from './img/logo.svg';

export const Header = () => (
  <Layout>
    <header
      className={style.header}>
      <a href='/auth'>
        <Logo className={style.header_logo} />
      </a>
    </header>
  </Layout>);
