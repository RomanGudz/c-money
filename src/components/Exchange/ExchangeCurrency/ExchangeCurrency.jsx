import React from 'react';
import style from './ExchangeCurrency.module.css';

export const ExchangeCurrency = () => {
  console.log();
  return (<div>
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
        <tr>
          <td className={style.exchange_td__code}>AUD</td>
          <td className={style.exchange_td__amount}>18.16</td>
        </tr>
        <tr>
          <td className={style.exchange_td__code}>BTC</td>
          <td className={style.exchange_td__amount}>3 081.22</td>
        </tr>
        <tr>
          <td className={style.exchange_td__code}>BYR</td>
          <td className={style.exchange_td__amount}>48.75</td>
        </tr>
        <tr>
          <td className={style.exchange_td__code}>CAD</td>
          <td className={style.exchange_td__amount}>251.48</td>
        </tr>
      </tbody>
    </table>
  </div>);
};
