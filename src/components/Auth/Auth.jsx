import React, { useEffect, useState } from 'react';
import style from './Auth.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { tokenRequest } from '../../store/token/tokenSlice';
import validateLogin from '../../utils/validate/validateLogin';
import validatePassword from '../../utils/validate/valodatePassword';
import { authRequest } from '../../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const dispatch = useDispatch();
  const [validPas, setValidPas] = useState(false);
  const [validLogin, setValidLogin] = useState(false);
  const errorValid = useSelector(state => state.token.errorValid);
  const token = useSelector(state => state.token.token);
  const navigate = useNavigate();
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
    const { login, password } = formData;
    if (!login || !password) {
      setValidPas(true);
      setValidLogin(true);
      return;
    }
    if (!validateLogin(login)) {
      setValidLogin(true);
      return;
    }
    if (!validatePassword(password)) {
      setValidPas(true);
      return;
    }
    dispatch(tokenRequest(formData));
  };
  useEffect(() => {
    if (token) {
      dispatch(authRequest(token));
      navigate('/currencies');
    }
  }, [token]);
  return (
    <div className={style.auth__container}>
      <div className={style.auth__wrapper}>
        <form className={style.auth_form} onSubmit={handleSubmit}>
          <legend className={style.form__title}>Вход в аккаунт</legend>
          <div className={style.form__input_wrapper}>
            {validLogin && (<span className={style.form__error}>
              ошибка ввода</span>)}
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
            {validPas && (<span className={style.form__error}>
              ошибка ввода</span>)}
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
