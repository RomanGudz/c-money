import React, { useEffect, useState } from 'react';
import style from './ExchangeRight.module.css';
import classNames from 'classnames';
import ExchangeCurrency from '../ExchangeCurrency';
import { useDispatch, useSelector } from 'react-redux';
import errorProcessing from '../../../utils/errorProcessing';
import { exchangeBuyRequest } from '../../../store/exchange/exchangeSlice';
import PropTypes from 'prop-types';

export const ExchangeRight = ({ currencies }) => {
  const allCurrencies = useSelector(state => state.exchange.allCurrencies);
  const error = useSelector(state => state.exchange.error);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState('');
  const [errText, setErrText] = useState('');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    amount: ''
  });

  useEffect(() => {
    setErrText(errorProcessing(error));
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let errors = '';
    if (!formData.amount.trim()) {
      errors = 'Поле "Сумма" обязательно для заполнения';
    } else if (parseFloat(formData.amount) <= 0) {
      errors = 'Сумма должна быть положительным числом';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendExchange = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(exchangeBuyRequest(formData));
    }
  };
  return (
    <div className={style.exchange_right__wrapper}>
      <div className={style.exchange_exchange__wrapper}>
        <h3 className={style.exchange__title}>Обмен валюты</h3>
        <form className={style.exchange_form} onSubmit={sendExchange}>
          <div className={style.exchange_inputs__wrapper}>
            <div className={style.exchange_input_wrapper}>
              <label className={style.exchange_label}>
                Откуда
              </label><select
                className={style.exchange_input}
                name="from"
                onChange={handleChange}
              >
                <option></option>
                {allCurrencies.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select></div>
            <div className={style.exchange_input_wrapper}>
              <label className={style.exchange_label}>
                Куда
              </label><select
                className={style.exchange_input}
                name="to"
                onChange={handleChange}
              >
                <option></option>
                {allCurrencies.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select></div>
            <div className={style.exchange_input_wrapper}>
              {errors ? (
                <span className={style.exchange_form__error}>{errors}</span>) :
                ''}
              {errText ? (
                <span
                  className={style.exchange_form__error}
                >
                  {errText}
                </span>) : ''}
              <label
                className={style.exchange_label}>
                Сумма
              </label>
              <input className={style.exchange_input}
                name="amount"
                onChange={handleChange} />
            </div>
          </div>
          <button className={classNames(style.exchange_button, style.button)}>
            Обменять</button>
        </form>
      </div>
      <ExchangeCurrency currencies={currencies} />
    </div>);
};

ExchangeRight.propTypes = {
  currencies: PropTypes.array,
};
