import React from 'react';
import Layout from '../../Layout';
import style from './Home.module.css';
import classNames from 'classnames';
import CurrenciesSort from './CurrenciesSort';
import CurrenciesList from './CurrenciesList';

export const Home = () => {
  console.log();
  return (
    <Layout>
      <div className={style.currencies_container}>

        <h2 className={style.currencies_title}>Здравствуйте, Александр!</h2>
        <button
          className={classNames(style.currencies_button, style.button)}>
          Открыть новый счет
        </button>
        <div className={style.currencies_currencies}>
          <h3 className={style.currencies_title}>Мои счета</h3>
          <CurrenciesSort />
          <CurrenciesList />
        </div>
      </div>
    </Layout>
  );
};
