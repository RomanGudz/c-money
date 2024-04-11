import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Layout from '../Layout';
import style from './CheckUser.module.css';
import { ReactComponent as BackIcon } from './img/backIcon.svg';
import TableHistiory from './TableHistory';
import AccountTransition from './AccountTransition';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import { checkRequest } from '../../store/checkUser/checkSlice';
import sortYear from '../../utils/sortYear';
import transactionsYears from '../../utils/transactionsYears';
import balanceCheck from '../../utils/balanceCheck';

// в файле style есть прелоадер может пригодится

export const CheckUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isload, setIsLload] = useState(false);
  const [years, setYears] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [year, setYear] = useState('');
  const [months, setMonths] = useState([]);
  const [balanceMoth, setBalanceMoth] = useState([]);
  const data = useSelector(state => state.check.data);

  useEffect(() => {
    dispatch(checkRequest(id));
    setIsLload(true);
  }, [id]);

  useEffect(() => {
    if (isload) {
      setTransactions(data.transactions);
      setYears(transactionsYears(data.transactions));
      setIsLload(false);
    }
  }, [data]);

  const selectedYear = (event) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    if (data.transactions) {
      setTransactions(sortYear(data.transactions, year));
      const [balance, months] = balanceCheck(
        sortYear(data.transactions, year), id);
      setMonths(months);
      setBalanceMoth(balance.map(item => item.balance));
      console.log(balance);
    }
  }, [year]);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Баланс счета',
        data: balanceMoth,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };
  return (
    <Layout>
      <div className={style.account_container}>
        <div className={style.account_container__header}>
          <h2 className={style.account_title}>
            Счет {id}
          </h2>
          <a className={classNames(style.account_button, style.button)}
            // element="[object Object]"
            href="/currencies">
            <BackIcon />
            Вернуться</a>
        </div>
        <div className={style.account_dynamic}>
          <div className={style.account_dynamic__header}>
            <h3 className={style.account_dynamic__title}>Динамика</h3>
            <span className={style.account_dynamic__year}>{year}</span>
            <select
              className={style.account_dynamic__select}
              onChange={selectedYear}
            >
              <option hidden="">Год</option>
              {years.map(year => (<option key={year}>{year}</option>))}
            </select>
          </div>
          <Line data={chartData} />
        </div>
        <div className={style.account_history}>
          <h3 className={style.account_history__title}>История переводов</h3>
          <TableHistiory transactions={transactions.slice(-9)} id={id} />
        </div>
        <AccountTransition />
      </div>
    </Layout>
  );
};
