import React, { useState } from 'react';
import Layout from '../../Layout';
import style from './Home.module.css';
import classNames from 'classnames';
import CurrenciesSort from './CurrenciesSort';
import CurrenciesList from './CurrenciesList';
import { useDispatch, useSelector } from 'react-redux';
import { createCheckRequest }
  from '../../../store/createCheck/createCheckSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('account');
  const options = [
    { id: 'account', text: 'Номер счёта' },
    { id: 'balance', text: 'Баланс' },
    { id: 'date', text: 'Дата открытия' },
    { id: 'last', text: 'Дата последней трансзакции' }
  ];

  const loading = useSelector(state => state.auth.loading);
  const auth = useSelector(state => state.auth.data);


  const addCheck = () => {
    dispatch(createCheckRequest());
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortCurrencies = (currencies) => {
    const sortedCurrencies = [...currencies];
    return sortedCurrencies.sort((a, b) => {
      if (sortBy === 'Номер счёта') {
        return a.account.localeCompare(b.account);
      } else if (sortBy === 'Баланс') {
        console.log(a.balance - b.balance);
        return a.balance - b.balance;
      } else if (sortBy === 'Дата открытия') {
        return new Date(a.openDate) - new Date(b.openDate);
      } else if (sortBy === 'Дата последней трансзакции') {
        return new Date(b.transactions[0].date) -
          new Date(a.transactions[0].date);
      }
    });
  };
  return (
    <Layout>
      <div className={style.currencies_container}>

        <h2 className={style.currencies_title}>Здравствуйте!</h2>
        <button
          className={classNames(style.currencies_button, style.button)}
          onClick={addCheck}
        >
          Открыть новый счет
        </button>
        <div className={style.currencies_currencies}>
          <h3 className={style.currencies_title}>Мои счета</h3>
          <CurrenciesSort options={options} onChange={handleSortChange} />
          <CurrenciesList currencies={sortCurrencies(auth)} loading={loading} />
        </div>
      </div>
    </Layout>
  );
};
