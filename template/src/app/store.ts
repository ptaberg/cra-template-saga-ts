import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import counterReducer from '../features/counter/reducers';
import { watchIncrementAsync, watchAddAsync } from '../features/counter/sagas';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    counter: counterReducer
})

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchAddAsync()
    ])
}

const middlewares = applyMiddleware(sagaMiddleware)

export const store = createStore(rootReducer, middlewares)

sagaMiddleware.run(rootSaga)