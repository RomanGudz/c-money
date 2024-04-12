import Layout from '../Layout';
import style from './Exchange.module.css';
import classNames from 'classnames';
import { ReactComponent as ArrowUp } from './img/arrow-up.svg';
import { ReactComponent as ArrowDown } from './img/arrow-down.svg';
import ExchangeRight from './ExchangeRight';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// есть лоадер Exchange_loader__containe

export const Exchange = () => {
  const total = useSelector(state => state.exchange.currencies);
  const exchangeCurrency = useSelector(state => state.exchange.currencies);
  const [messages, setMessages] = useState([]);
  const location = useLocation();
  console.log('messages: ', messages);

  const processData = (exchangeData) => {
    const { type, from, to, rate, change } = exchangeData;
    if (type === 'EXCHANGE_RATE_CHANGE') {
      const data = {
        currencyPair: `${from}/${to}`,
        rate,
        change
      };

      return data;
    }
  };

  useEffect(() => {
    if (location.pathname === '/exchange') {
      const client = new WebSocket('ws://localhost:3000/currency-feed');
      console.log('client: ', client);
      client.addEventListener('message', message => {
        setMessages(prevMessages => [
          ...prevMessages.slice(-6),
          processData(JSON.parse(message.data))]);
      });

      return () => {
        client.close();
      };
    }
  }, [location.pathname]);

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
          {total.RUB?.amount}
        </span>
        <div className={style.exchange_wrapper}>
          <div className={style.exchange_rates__wrapper}>
            <h3 className={style.exchange_rates__title}>
              Изменение курса в режиме реального времени
            </h3>
            <div className={style.exchange_tbody} >
              {messages.map((message, index) => (
                <div className={style.exchange_tr_e} key={index}>
                  <span className={style.exchange_td__first}
                  >
                    {message.currencyPair}</span>
                  <span className={style.exchange_td__second}>
                  </span>
                  <span className={style.exchange_td__third}>{message.rate}
                    {message.change < 1 ? (<ArrowDown />) : (<ArrowUp />)}
                  </span>
                </div>))}
            </div>
          </div>
          <ExchangeRight currencies={Object.values(exchangeCurrency)} />
        </div>
      </div>
    </Layout>
  );
};
