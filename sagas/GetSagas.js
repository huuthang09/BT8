import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_DATA_REQUEST, getDataFail, getDataSuccess} from '../actions/GetActions';
import {getData} from '../api/Api';
import {sendNetworkFail} from '../actions/actions';

export function* watchGetData() {
  yield takeEvery(GET_DATA_REQUEST, handleGetData);
}

function* handleGetData(action) {
  const response = yield call(getData, action.payload);
  if (response !== []) {
    yield put(getDataSuccess(response));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getDataFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getDataFail(response.problem));
    }
  }
}