import axios from 'axios';
import { put, takeLatest, call } from '@redux-saga/core/effects';
import {
  authRequestSucces,
  authRequestError,
} from './authSlice';
import { URL } from '../../API/const';

function* authAsync(action) {
  // const loading = yield select(state => state.auth.loading);
  // if (loading) return;
  const config = {
    headers: {
      Authorization: `Basic ${action.payload}`,
    }
  };

  try {
    const response = yield call(axios.get, `${URL}accounts`, config);

    const { payload } = response.data;

    yield put(authRequestSucces(payload));
  } catch (err) {
    yield put(authRequestError(err.message));
  }
}

export function* watchAuthAsync() {
  yield takeLatest('auth/authRequest', authAsync);
}
