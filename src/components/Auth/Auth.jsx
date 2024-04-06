import React, { useState } from 'react';
import style from './Auth.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { tokenRequest } from '../../store/token/tokenSlice';


export const Auth = () => {
  const dispatch = useDispatch();
  const [valid, setValid] = useState(false);
  const errorValid = useSelector(state => state.token.errorValid);
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.login.length) {
      setValid(true);
      return;
    }
    if (!formData.password.length) {
      setValid(true);
      return;
    }
    dispatch(tokenRequest(formData));
  };
  return (
    <div className={style.auth__container}>
      <div className={style.auth__wrapper}>
        <form className={style.auth_form} onSubmit={handleSubmit}>
          <legend className={style.form__title}>Вход в аккаунт</legend>
          <div className={style.form__input_wrapper}>
            {valid && (<span className={style.form__error}>
              поле не должно быть пустым</span>)}
            <label className={style.form__label}>Логин</label>
            <input
              className={style.form__input}
              name="login"
              autoComplete="username"
              value={formData.login}
              onChange={handleChange}
            />
          </div>
          <div className={style.form__input_wrapper}>
            {valid && (<span className={style.form__error}>
              поле не должно быть пустым</span>)}
            <label className={style.form__label}>Пароль</label>
            <input type="password"
              className={style.form__input}
              name="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {errorValid &&
            (<span style={{ color: 'red' }}>
              Ошибка логина или пароля</span>)}
          <button className={classNames(style.form__button, style.button)}
            type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};
