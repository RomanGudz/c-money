import axios from 'axios';
import { put, takeLatest, select } from '@redux-saga/core/effects';
import {
  exchangeRequestSucces,
  exchangeRequestError,
} from './exchangeSlice';
import { URL } from '../../API/const';

function* exchangeAsync() {
  const token = yield select(state => state.token.token);

  const config = {
    headers: {
      Authorization: `Basic ${token}`,
    }
  };

  try {
    const responseAllCurrencies = yield axios.get(
      `${URL}all-currencies`, {}, config);

    const responseCurrencies = yield axios.get(
      `${URL}currencies`, config);

    const { payload: allCurrencies } = responseAllCurrencies.data;
    const { payload: currencies } = responseCurrencies.data;

    yield put(exchangeRequestSucces({ allCurrencies, currencies }));
  } catch (err) {
    yield put(exchangeRequestError(err.message));
  }
}

export function* watchExchangeAsync() {
  yield takeLatest('exchange/exchangeRequest', exchangeAsync);
}
