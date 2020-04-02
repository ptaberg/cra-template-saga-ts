import { put, takeEvery, all } from 'redux-saga/effects'
import { TSaga } from './types';
import { delay } from './utils';

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync(): TSaga {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync(): TSaga {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga(): TSaga {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}