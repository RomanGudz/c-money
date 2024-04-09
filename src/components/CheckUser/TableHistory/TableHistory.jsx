import React, { useState } from 'react';
import style from './TableHistory.module.css';
import classNames from 'classnames';
import formatDate from '../../../utils/formatDate';
import PropTypes from 'prop-types';
// import sortYear from '../../../utils/sortYear';

export const TableHistory = ({ transactions }) => {
  const [th] = useState(['Счет', 'Сумма', 'Дата']);
  // const [sortedTransactions, setSortedTransactions] = useState([]);

  // useEffect(() => {
  //   if (transactions) {
  //     setSortedTransactions(transactions);
  //     const sorted = sortYear(sortedTransactions);
  //     setSortedTransactions(sorted);
  //   }
  // }, [transactions]);

  // if (transactions) {
  //   return null;
  // }
  return (<div className={style.table__container}>
    <table className={style.table}>
      <thead className={style.table_thead}>
        <tr>
          {th.map((text, index) => (
            <th key={index} className={style.table_th} > {text}</th>))}
        </tr>
      </thead>
      <tbody className={style.table_tbody}>
        {transactions &&
          transactions.map((transaction, index) => (<tr key={index}>
            <td className={style.table_td}>{transaction.to}</td>
            <td className={classNames(style.table_td, style.table_middle)}>
              {transaction.amount}
            </td>
            <td className={classNames(style.table_td, style.table_td_date)}>
              {formatDate(transaction.date)}
            </td>
          </tr>))}
      </tbody>
    </table>
  </div>);
};

TableHistory.propTypes = {
  transactions: PropTypes.array,
};
