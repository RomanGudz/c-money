import React from 'react';
import style from './AccountTransition.module.css';
import classNames from 'classnames';

export const AccountTransition = () => {
  console.log();
  return (<div className={style.account_transaction}>
    <h3
      className={classNames(style.account_transaction__title,
        style.account_title)}>
      Перевод</h3>
    <form className={style.account_transaction__form}>
      <div className={style.account_transaction__input_wrap}>
        <label className={style.account_transaction__label}>Счет</label>
        <input className={style.account_transaction__input} name="to" />
      </div>
      <div className={style.account_transaction__input_wrap}>
        <label className={style.account_transaction__label}>Сумма</label>
        <input className={style.account_transaction__input} name="amount" />
      </div><button className={classNames(style.account_button, style.button)}
      >
        Перевести
      </button>
    </form>
  </div>);
};
