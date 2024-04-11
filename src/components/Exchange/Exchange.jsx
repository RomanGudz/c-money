import React from 'react';
import Layout from '../Layout';
import style from './Exchange.module.css';
import classNames from 'classnames';
import { ReactComponent as ArrowUp } from './img/arrow-up.svg';
import { ReactComponent as ArrowDown } from './img/arrow-down.svg';
import ExchangeRight from './ExchangeRight';
import { useSelector } from 'react-redux';

// есть лоадер Exchange_loader__containe

export const Exchange = () => {
  const total = useSelector(state => state.exchange.currencies);
  const exchangeCurrency = useSelector(state => state.exchange.currencies);
  console.log('exchangeCurrency: ', Object.values(exchangeCurrency));
  return (
    <Layout>
      <div className={style.exchange_container}>
        <h2 className={style.exchange_title}
        >
          Обмен валюты
        </h2>
        <span className={style.exchange_text}
        >
          Счет
        </span>
        <span className={style.exchange_text_white}
        >
          24051911200915061003240821
        </span>
        <br />
        <span className={style.exchange_text}
        >
          Баланс
        </span>
        <span className={
          classNames(style.exchange_balance, style.exchange_text_white)}
        >
          {total.RUB.amount}
        </span>
        <div className={style.exchange_wrapper}>
          <div className={style.exchange_rates__wrapper}>
            <h3 className={style.exchange_rates__title}>
              Изменение курса в режиме реального времени
            </h3>
            <div className={style.exchange_tbody}>
              <div className={style.exchange_tr_e}>
                <span className={style.exchange_td__first}>CAD/UAH</span>
                <span className={style.exchange_td__second}>
                </span>
                <span className={style.exchange_td__third}>42.98
                  <ArrowUp />
                </span></div>
              <div className={style.exchange_tr_e}>
                <span className={style.exchange_td__first}>
                  CNH/CAD
                </span>
                <span
                  className={style.exchange_td__second}></span>
                <span className={style.exchange_td__third}>
                  67.6
                  <ArrowUp />
                </span>
              </div>
              <div className={style.exchange_tr_e}>
                <span className={style.exchange_td__first}>
                  CNH/CAD
                </span>
                <span className={style.exchange_td__second}></span>
                <span className={style.exchange_td__third}>
                  46.25
                  <ArrowDown />
                </span>
              </div>
              <div className={style.exchange_tr_e}>
                <span className={style.exchange_td__first}>
                  ETH/RUB
                </span>
                <span className={style.exchange_td__second}>
                </span>
                <span className={style.exchange_td__third}>
                  89.17
                  <ArrowUp />
                </span>
              </div>
              <div className={style.exchange_tr_e}>
                <span className={style.exchange_td__first}>
                  RUB/HKD
                </span>
                <span className={style.exchange_td__second}>
                </span>
                <span className={style.exchange_td__third}>
                  84.26
                  <ArrowUp />
                </span>
              </div>
              <div className={style.exchange_tr_e}>
                <span className={style.exchange_td__first}>
                  CHF/USD
                </span>
                <span className={style.exchange_td__second}>
                </span>
                <span className={style.exchange_td__third}>
                  87.39
                  <ArrowUp />
                </span></div>
              <div className={style.exchange_tr_e}>
                <span className={style.exchange_td__first}>
                  RUB/AUD
                </span>
                <span className={style.exchange_td__second}>
                </span>
                <span className={style.exchange_td__third}>
                  68.44
                  <ArrowUp />
                </span>
              </div>
              <div className={style.exchange_tr_e}>
                <span className={style.exchange_td__first}>
                  USD/JPY
                </span>
                <span className={style.exchange_td__second}>
                </span>
                <span className={style.exchange_td__third}>82.07
                  <ArrowUp />
                </span></div>
            </div>
          </div>
          <ExchangeRight currencies={Object.values(exchangeCurrency)} />
        </div>
      </div>
    </Layout>
  );
};
