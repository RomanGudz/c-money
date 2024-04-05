import React from 'react';
import style from './CurrenciesSort.module.css';

export const CurrenciesSort = () => {
  console.log();
  return (<div className={style.currencies_sort}>
    <span className={style.currencies_sort__title}>
      Сортировка:</span>
    <select
      className={style.currencies_select}>
      <option id="account">Номер счёта</option>
      <option id="balance">Баланс</option>
      <option id="date">Дата открытия</option>
      <option id="last">Дата последней трансзакции</option>
    </select>
  </div>);
};
