import axios from 'axios';
import { put, takeLatest, call, select } from '@redux-saga/core/effects';
import {
  createCheckRequestSucces,
  createCheckRequestError,
} from './createCheckSlice';
import { URL } from '../../API/const';

function* createCheckAsync() {
  const token = yield select(state => state.token.token);

  const config = {
    headers: {
      Authorization: `Basic ${token}`,
    }
  };

  try {
    const response = yield call(axios.post, `${URL}create-account`, config);

    const { payload } = response.data;

    yield put(createCheckRequestSucces(payload));
  } catch (err) {
    yield put(createCheckRequestError(err.message));
  }
}

export function* watchCreateCheckAsync() {
  yield takeLatest('createCheck/createCheckRequest', createCheckAsync);
}
