import React from 'react';
import style from './CurrenciesList.module.css';
import formatDate from '../../../../utils/formatDate';
import { Link, Outlet } from 'react-router-dom';

import PropTypes from 'prop-types';

export const CurrenciesList = ({ currencies, loading }) => {
  console.log();
  return (<><ul className={style.currencies_list}>
    {loading ? <p>load....</p> :
      currencies.map(currenc =>
        <li className={style.card_card} key={currenc.account}>
          <Link
            to={`/account/${currenc.account}`}>
            <p className={style.card_id}>{currenc.account}</p>
            <p className={style.card_balance}>{currenc.balance}</p>
            <div className={style.card_info}>
              <div>
                <p>открыт</p>
                <p>{formatDate(currenc.date)}</p>
              </div>
              {currenc.transactions.length > 0 ?
                (<div>
                  <p>последняя операция</p>
                  <time dateTime="2022-07-16T10:36:01.474Z">
                    {formatDate(currenc.transactions[0].date)}</time>
                </div>) : (<p>Нет операций</p>)}
            </div>
          </Link></li>)}
  </ul><Outlet />
  </>);
};

CurrenciesList.propTypes = {
  currencies: PropTypes.array,
  loading: PropTypes.bool,
};
