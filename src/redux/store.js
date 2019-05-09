import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import chats, { sagas as chatsSagas } from './chats'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ chats })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

function* rootSaga() {
  yield all([...chatsSagas])
}

sagaMiddleware.run(rootSaga)

export default store
