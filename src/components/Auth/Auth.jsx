import React from 'react';
import style from './Auth.module.css';
import classNames from 'classnames';

export const Auth = () => {
  console.log();
  return (
    <div className={style.auth__container}>
      <div className={style.auth__wrapper}>
        <form className={style.auth_form} >
          <legend className={style.form__title}>Вход в аккаунт</legend>
          <div className={style.form__input_wrapper}>
            <span className={style.form__error}>error</span>
            <label className={style.form__label}>Логин</label>
            <input
              className={style.form__input}
              name="login"
              autoComplete="username" />
          </div>
          <div className={style.form__input_wrapper}>
            <span className={style.form__error}>error</span>
            <label className={style.form__label}>Пароль</label>
            <input type="password"
              className={style.form__input}
              name="password"
              autoComplete="current-password"
            />
          </div>
          <button className={classNames(style.form__button, style.button)}
            type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};
