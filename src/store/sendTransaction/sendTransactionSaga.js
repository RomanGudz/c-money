import axios from 'axios';
import { put, takeLatest, select } from '@redux-saga/core/effects';
import {
  sendTransactionRequestSucces,
  sendTransactionRequestError,
} from './sendTransactionSlice';
import { URL } from '../../API/const';

function* sendTransactionAsync(action) {
  console.log('action: ', action);
  const { formData, id } = action.payload;
  const token = yield select(state => state.token.token);
  // const loading = yield select(state => state.auth.loading);
  // if (loading) return;

  try {
    const response = yield axios.post(`${URL}transfer-funds`,
      {
        from: id,
        to: formData.to,
        amount: formData.amount,
      },
      {
        headers: {
          Authorization: `Basic ${token}`,
        }
      });

    const { payload } = response.data;
    console.log('payload: ', payload);

    yield put(sendTransactionRequestSucces(payload));
  } catch (err) {
    yield put(sendTransactionRequestError(err.message));
  }
}

export function* watchSendTransactionAsync() {
  yield takeLatest('sendTransaction/sendTransactionRequest',
    sendTransactionAsync);
}
