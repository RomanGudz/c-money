import React from 'react';
import style from './ExchangeCurrency.module.css';
import PropTypes from 'prop-types';

export const ExchangeCurrency = ({ currencies }) => (<div>
  <table>
    <thead>
      <tr>
        <th
          className={style.exchange_currency__title}
          colSpan="2">
          Мои валюты
        </th>
      </tr>
    </thead>
    <tbody>
      {currencies.map((currency, index) => (
        index % 2 === 0 &&
        <tr key={currency.code}>
          <td className={style.exchange_td__code}>{currency.code}</td>
          <td className={style.exchange_td__amount}>
            {currency.amount}
          </td>
          {index + 1 < currencies.length && (
            <td>
              <span className={style.exchange_td__code}>
                {currencies[index + 1].code}
              </span>
              <span className={style.exchange_td__amount}>
                {currencies[index + 1].amount}
              </span>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
</div>);

ExchangeCurrency.propTypes = {
  currencies: PropTypes.array,
};
