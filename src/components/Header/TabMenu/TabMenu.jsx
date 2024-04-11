import React from 'react';
import style from './TabMenu.module.css';
import { ReactComponent as Exit } from './img/exit.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../../store/token/tokenSlice';
import classNames from 'classnames';

export const TabMenu = () => {
  const navigate = useNavigate();
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const params = useParams();
  const exit = () => {
    localStorage.removeItem('token');
    dispatch(deleteToken());
    navigate('/auth');
  };
  return (<ul className={style.header_nav}>
    {token && (<>
      <button
        aria-current="page"
        className={classNames((params['*'] ===
          'currencies' ? style.active : style.header_exit))}
        onClick={() => {
          navigate('/currencies');
        }}>
        Счета
      </button>
      <button
        aria-current="page"
        className={classNames((params['*'] ===
          'exchange' ? style.active : style.header_exit))}
        onClick={() => {
          navigate('/exchange');
        }}
      >
        Обмен
      </button>
      <button
        className={style.header_exit}
        onClick={exit}
      >Выйти
        <Exit className={style.header_arrow} />
      </button>
    </>)}
  </ul>);
};
