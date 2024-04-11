import React from 'react';
import style from './TabMenu.module.css';
import { ReactComponent as Exit } from './img/exit.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../../store/token/tokenSlice';

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
      <a
        aria-current="page"
        className={params['*'] === 'currencies' ? style.active : ''}
        onClick={() => {
          navigate('/currencies');
        }}>
        Счета
      </a>
      <a
        aria-current="page"
        className={params['*'] === 'exchange' ? style.active : ''}
        onClick={() => {
          navigate('/exchange');
        }}
      >
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
