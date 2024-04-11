import axios from 'axios';
import { put, takeLatest, call, select } from '@redux-saga/core/effects';
import {
  checkRequestSucces,
  checkRequestError,
} from './checkSlice';
import { URL } from '../../API/const';

function* checkAsync(action) {
  const token = yield select(state => state.token.token);
  const config = {
    headers: {
      Authorization: `Basic ${token}`,
    }
  };

  try {
    const response = yield call(
      axios.get, `${URL}account/${action.payload}`, config);

    const { payload } = response.data;

    yield put(checkRequestSucces(payload));
  } catch (err) {
    yield put(checkRequestError(err.message));
  }
}

export function* watchCheckAsync() {
  yield takeLatest('check/checkRequest', checkAsync);
}
