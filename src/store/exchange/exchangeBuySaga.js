import axios from 'axios';
import { put, takeLatest, select } from '@redux-saga/core/effects';
import {
  exchangeBuyRequestSucces,
  exchangeBuyErrorForm,
  exchangeRequestError,
} from './exchangeSlice';
import { URL } from '../../API/const';

function* exchangeBuyAsync(action) {
  console.log('action: ', action);
  const token = yield select(state => state.token.token);

  try {
    const response = yield axios.post(`${URL}currency-buy`,
      {
        from: action.payload.from,
        to: action.payload.to,
        amount: action.payload.amount,
      },
      {
        headers: {
          Authorization: `Basic ${token}`,
        }
      });

    const { payload, error } = response.data;
    yield put(exchangeBuyErrorForm(error));
    if (payload !== null) {
      yield put(exchangeBuyRequestSucces(payload));
    }
  } catch (err) {
    yield put(exchangeRequestError(err.message));
  }
}

export function* watchExchangeBuyAsync() {
  yield takeLatest('exchange/exchangeBuyRequest',
    exchangeBuyAsync);
}
