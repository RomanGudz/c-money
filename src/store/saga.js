import { all } from 'redux-saga/effects';
import { watchTokenAsync } from './token/tokenSaga';
import { watchAuthAsync } from './auth/authSaga';
import { watchCheckAsync } from './checkUser/checkSaga';

export default function* rootSaga() {
  yield all([
    watchTokenAsync(),
    watchAuthAsync(),
    watchCheckAsync(),
  ]);
}
