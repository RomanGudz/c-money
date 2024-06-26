import { all } from 'redux-saga/effects';
import { watchTokenAsync } from './token/tokenSaga';
import { watchAuthAsync } from './auth/authSaga';
import { watchCheckAsync } from './checkUser/checkSaga';
import { watchCreateCheckAsync } from './createCheck/createCheckSaga';
import { watchSendTransactionAsync }
  from './sendTransaction/sendTransactionSaga';
import { watchExchangeAsync } from './exchange/exchangeSaga';
import { watchExchangeBuyAsync } from './exchange/exchangeBuySaga';

export default function* rootSaga() {
  yield all([
    watchTokenAsync(),
    watchAuthAsync(),
    watchCheckAsync(),
    watchCreateCheckAsync(),
    watchSendTransactionAsync(),
    watchExchangeAsync(),
    watchExchangeBuyAsync(),
  ]);
}
