import React, { useEffect, useState } from 'react';
import style from './AccountTransition.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { sendTransactionRequest }
  from '../../../store/sendTransaction/sendTransactionSlice';
import errorProcessing from '../../../utils/errorProcessing';

export const AccountTransition = ({ id }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    to: '',
    amount: ''
  });
  const [errors, setErrors] = useState({});
  const error = useSelector(state => state.sendTransaction.error);
  const [errText, setErrText] = useState('');

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
    const errors = {};
    if (!formData.to.trim()) {
      errors.to = 'Поле "Счет" обязательно для заполнения';
    } else if (isNaN(formData.to)) {
      errors.to = 'Счет должен быть числом';
    }
    if (!formData.amount.trim()) {
      errors.amount = 'Поле "Сумма" обязательно для заполнения';
    } else if (parseFloat(formData.amount) <= 0) {
      errors.amount = 'Сумма должна быть положительным числом';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendTransaction = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(sendTransactionRequest({ formData, id }));
    }
  };
  return (<div className={style.account_transaction}>
    <h3
      className={classNames(style.account_transaction__title,
        style.account_title)}>
      Перевод</h3>
    <form
      className={style.account_transaction__form}
      onSubmit={sendTransaction}
    >
      <div className={style.account_transaction__input_wrap}>
        {errors.to ? (<span className={style.form__error}>{errors.to}</span>) :
          (<label className={style.account_transaction__label}>Счет</label>)}
        <input
          className={style.account_transaction__input}
          name="to"
          value={formData.to}
          onChange={handleChange}
        />
      </div>
      <div className={style.account_transaction__input_wrap}>
        {errors.amount ?
          (<span className={style.form__error}>{errors.amount}</span>) :
          (<label className={style.account_transaction__label}>Сумма</label>)}
        <input
          className={style.account_transaction__input}
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}

        />
      </div>
      <button
        className={classNames(style.account_button, style.button)}
        type="submit"
      >
        Перевести
      </button>
    </form>
    {errText ? (<p className={style.form__error}>{errText}</p>) : ''}
  </div>);
};

AccountTransition.propTypes = {
  id: PropTypes.string,
};
