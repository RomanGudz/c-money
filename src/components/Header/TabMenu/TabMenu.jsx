import React from 'react';
import style from './TabMenu.module.css';
import { ReactComponent as Exit } from './img/exit.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../../store/token/tokenSlice';

export const TabMenu = () => {
  const navigate = useNavigate();
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const exit = () => {
    localStorage.removeItem('token');
    dispatch(deleteToken());
    navigate('/auth');
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
