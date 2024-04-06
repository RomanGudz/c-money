import React, { useState } from 'react';
import style from './TableHistory.module.css';
import classNames from 'classnames';

export const TableHistory = () => {
  const [th] = useState(['Счет', 'Сумма', 'Дата']);

  return (<div className={style.table__container}>
    <table className={style.table}>
      <thead className={style.table_thead}>
        <tr>
          ({th.map((text) => {
            <th className={style.table_th}>{text}</th>;
          })})
        </tr>
      </thead>
      <tbody className={style.table_tbody}>
        <tr>
          <td className={style.table_td}>78533416338616366622402206</td>
          <td className={classNames(style.table_td, style.table_middle)}>
            725.03
          </td>
          <td className={classNames(style.table_td, style.table_td_date)}>
            23.07.2022
          </td>
        </tr>
        <tr>
          <td className={style.table_td}>03076315655672621035503853</td>
          <td className={classNames(style.table_td, style.table_middle)}>
            754.63
          </td>
          <td className={classNames(style.table_td, style.table_td_date)}>
            23.07.2022
          </td>
        </tr>
        <tr>
          <td className={style.table_td}>77143036472230035143835017</td>
          <td className={classNames(style.table_td, style.table_middle)}>
            575.73
          </td>
          <td className={classNames(style.table_td, style.table_td_date)}>
            23.07.2022
          </td>
        </tr>
      </tbody>
    </table>
  </div>);
};
