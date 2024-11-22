import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../types';

function* loginRequest({ payload }) {
  console.log('SAGA', payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
