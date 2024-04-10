import React from 'react';
import style from './CurrenciesSort.module.css';
import PropTypes from 'prop-types';

export const CurrenciesSort = ({ options, onChange }) => {
  console.log();
  return (<div className={style.currencies_sort}>
    <span className={style.currencies_sort__title}>
      Сортировка:</span>
    <select
      onChange={onChange}
      className={style.currencies_select}>
      {options.map((option, index) => (
        <option key={index} id={option.id}>{option.text}</option>))}
    </select>
  </div>);
};

CurrenciesSort.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
};

