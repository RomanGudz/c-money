import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import { ReactComponent as Logo } from './img/logo.svg';
import TabMenu from './TabMenu';

export const Header = () => {
  console.log();
  return (
    <Layout>
      <header
        className={style.header}>
        <div className={style.header_container}>
          <a href='/auth'>
            <Logo className={style.header_logo} />
          </a>
          <TabMenu />
        </div>
      </header>
    </Layout>);
};
