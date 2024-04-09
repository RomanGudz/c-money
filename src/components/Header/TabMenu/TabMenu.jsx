import React from 'react';
import style from './TabMenu.module.css';
import { ReactComponent as Exit } from './img/exit.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const TabMenu = () => {
  const navigate = useNavigate();
  const token = useSelector(state => state.token.token);
  const exit = () => {
    navigate('/auth');
    localStorage.removeItem('token');
  };
  return (<ul className={style.header_nav}>
    {token && (<>
      <a
        // element='[object Object]'
        aria-current="page" className={style.active}
        href='/currencies'>
        Счета
      </a>
      <a
        // element="[object Object]"
        href="/exchange">
        Обмен
      </a>
      <button
        className={style.header_exit}
        onClick={exit}
      >Выйти
        <Exit className={style.header_arrow} />
      </button>
    </>)}
  </ul>);
};
