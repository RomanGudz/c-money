import React from 'react';
import classNames from 'classnames';
import Layout from '../Layout';
import style from './CheckUser.module.css';
import { ReactComponent as BackIcon } from './img/backIcon.svg';
import TableHistiory from './TableHistory';
import AccountTransition from './AccountTransition';
import { useParams } from 'react-router-dom';
import { useCheckUser } from '../../hooks/useCheckUser';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';

// в файле style есть прелоадер может пригодится

export const CheckUser = () => {
  const { id } = useParams();
  const data = useCheckUser(id);
  console.log('data: ', data);

  const chartData = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр',
      'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    datasets: [
      {
        label: 'Баланс счета',
        data: [1000, 2000, 1000, 4000, 5000, 6000, 5000],
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
            <span className={style.account_dynamic__year}>2022</span>
            <select className={style.account_dynamic__select}>
              <option hidden="">Год</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
          <Line data={chartData} />
        </div>
        <div className={style.account_history}>
          <h3 className={style.account_history__title}>История переводов</h3>
          <TableHistiory transactions={data.transactions} id={id} />
        </div>
        <AccountTransition />
      </div>
    </Layout>
  );
};
