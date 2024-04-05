import React from 'react';
import Layout from '../Layout';
import { ReactComponent as FooterLogo } from './img/footer_logo.svg';
import style from './Footer.module.css';

export const Footer = () =>
  <Layout>
    <div className={style.footer}>
      <a href='/auth'>
        <FooterLogo className={style.footer_logo} />
      </a>
      <span className={style.footer_copy}>© C-Money, 2024</span>
    </div>
  </Layout>;
