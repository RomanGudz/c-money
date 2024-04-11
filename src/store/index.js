import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';
import authSlice from './auth/authSlice';
import tokenSlice from './token/tokenSlice';
import checkSlice from './checkUser/checkSlice';
import createCheckSlice from './createCheck/createCheckSlice';
import sendTransactionSlice from './sendTransaction/sendTransactionSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    auth: authSlice,
    check: checkSlice,
    createCheck: createCheckSlice,
    sendTransaction: sendTransactionSlice,
  },
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
