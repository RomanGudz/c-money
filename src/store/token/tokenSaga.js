import axios from 'axios';
import { put, select, takeLatest, call } from '@redux-saga/core/effects';
import {
  tokenRequestSuccess,
  tokenRequestError,
} from './tokenSlice';
import { URL } from '../../API/const';
import { setToken } from '../../hooks/token';

function* tokenAsync(action) {
  const { login: loginUser, password: passwordUser } = action.payload;
  const token = yield select(state => state.token.token);
  // const loading = yield select(state => state.postData.loading);
  if (token) return;
  const config = {
    // headers: {
    //   Authorization: `Basic ${token}`,
    // },
    body: {
      login: loginUser,
      password: passwordUser
    }
  };
  try {
    const response = yield call(axios.post, `${URL}login`, config.body);
    const { payload, error } = response.data;
    yield put(tokenRequestSuccess({ payload, error }));
    setToken(payload?.token);
  } catch (err) {
    yield put(tokenRequestError(err.message));
  }
}

export function* watchTokenAsync() {
  yield takeLatest('token/tokenRequest', tokenAsync);
}
