import axios from 'axios';
import { put, select, takeLatest } from '@redux-saga/core/effects';

function* authAsync(action) {
  const token = yield select(state => state.tokenReducer.token);
  const loading = yield select(state => state.postData.loading);

  try {
    const response = yield axios();
  } catch (err) {

  }
}