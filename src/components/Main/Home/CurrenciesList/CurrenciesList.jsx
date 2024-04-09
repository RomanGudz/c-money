import React from 'react';
import style from './CurrenciesList.module.css';
import { useAuth } from '../../../../hooks/useAuth';
import formatDate from '../../../../utils/formatDate';
import { Link, Outlet } from 'react-router-dom';

export const CurrenciesList = () => {
  const [auth, loading] = useAuth();
  console.log(auth);
  return (<><ul className={style.currencies_list}>
    {loading ? <p>load....</p> :
      auth.map(currenc => <li className={style.card_card} key={currenc.account}>
        <Link
          // element="[object Object]"
          to={`/account/${currenc.account}`}>
          <p className={style.card_id}>{currenc.account}</p>
          <p className={style.card_balance}>{currenc.balance}</p>
          <div className={style.card_info}>
            <div>
              <p>открыт</p>
              <p>{formatDate(currenc.date)}</p>
            </div>
            <div>
              <p>последняя операция</p>
              <time dateTime="2022-07-16T10:36:01.474Z">
                {formatDate(currenc.transactions[0].date)}</time>
            </div>
          </div>
        </Link></li>)}
  </ul><Outlet />
  </>);
};
