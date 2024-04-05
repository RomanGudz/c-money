import React from 'react';
import style from './TabMenu.module.css';
import { ReactComponent as Exit } from './img/exit.svg';

export const TabMenu = () => {
  console.log();
  return (<ul className={style.header_nav}>
    <a
      // element='[object Object]'
      aria-current="page" className={style.active}
      href='/currencies'>Счета</a>
    <a
      // element="[object Object]"
      href="/exchange">Обмен
    </a>
    <button
      className={style.header_exit}>Выйти
      <Exit className={style.header_arrow} />
    </button>
  </ul>);
};
