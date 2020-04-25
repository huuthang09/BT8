import {all} from 'redux-saga/effects';
import {watchGetData} from './GetSagas';

export default function* rootSaga() {
  yield all([watchGetData()]);
}