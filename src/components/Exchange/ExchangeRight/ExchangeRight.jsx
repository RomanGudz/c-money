import React from 'react';
import style from './ExchangeRight.module.css';
import classNames from 'classnames';
import ExchangeCurrency from '../ExchangeCurrency';

export const ExchangeRight = () => {
  console.log();
  return (
    <div className={style.exchange_right__wrapper}>
      <div className={style.exchange_exchange__wrapper}>
        <h3 className={style.exchange__title}>Обмен валюты</h3>
        <form className={style.exchange_form}>
          <div className={style.exchange_inputs__wrapper}>
            <div className={style.exchange_input_wrapper}>
              <label className={style.exchange_label}>
                Откуда
              </label><select
                className={style.exchange_input} name="from">
                <option>AUD</option>
                <option>BTC</option>
                <option>BYR</option>
                <option>CAD</option>

              </select></div>
            <div className={style.exchange_input_wrapper}>
              <label className={style.exchange_label}>
                Куда
              </label><select
                className={style.exchange_input} name="to">
                <option>AUD</option>
                <option>BTC</option>
                <option>BYR</option>
                <option>CAD</option>
              </select></div>
            <div className={style.exchange_input_wrapper}>
              <span className={style.exchange_form__error}>Error</span><label
                className={style.exchange_label}>
                Сумма
              </label><input className={style.exchange_input} name="amount" />
            </div>
          </div>
          <button className={classNames(style.exchange_button, style.button)}>
            Обменять</button>
        </form>
      </div>
      <ExchangeCurrency />
    </div>);
};
