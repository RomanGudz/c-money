import { all } from 'redux-saga/effects';
import { watchTokenAsync } from './token/tokenSaga';

export default function* rootSaga() {
  yield all([
    watchTokenAsync(),
  ]);
}
