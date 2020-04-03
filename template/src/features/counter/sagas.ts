import { put, takeEvery } from 'redux-saga/effects'
import { TSaga } from './types';
import { delay } from './utils';
import {
    ADD_AMOUNT_ASYNC, 
    addAmount,
    INCREMENT,
    INCREMENT_ASYNC
} from './actions';

function* incrementAsync(): TSaga {
  yield delay(1000);
  yield put({ type: INCREMENT });
}

function* addAmountAsync(action: any): TSaga {
    yield delay(1000);
    yield put(addAmount(action.value))
}

export function* watchIncrementAsync(): TSaga {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

export function* watchAddAsync(): TSaga {
    yield takeEvery(ADD_AMOUNT_ASYNC, addAmountAsync)
}
