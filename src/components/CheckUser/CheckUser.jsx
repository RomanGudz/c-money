import React from 'react';
import classNames from 'classnames';
import Layout from '../Layout';
import style from './CheckUser.module.css';
import { ReactComponent as BackIcon } from './img/backIcon.svg';
import TableHistiory from './TableHistory';
import AccountTransition from './AccountTransition';

// в файле style есть прелоадер может пригодится

export const CheckUser = () => {
  console.log();
  return (
    <Layout>
      <div className={style.account_container}>
        <div className={style.account_container__header}>
          <h2 className={style.account_title}>
            Счет №24051911200915061003240821
          </h2>
          <a className={classNames(style.account_button, style.button)}
            // element="[object Object]"
            href="/currencies">
            <BackIcon />
            Вернуться</a>
        </div>
        <div className={style.account_dynamic}>
          <div className={style.account_dynamic__header}>
            <h3 className={style.account_dynamic__title}>Динамика</h3>
            <span className={style.account_dynamic__year}>2022</span>
            <select className={style.account_dynamic__select}>
              <option hidden="">Год</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
        </div>
        <div className={style.account_history}>
          <h3 className={style.account_history__title}>История переводов</h3>
          <TableHistiory />
        </div>
        <AccountTransition />
      </div>
    </Layout>
  );
};
