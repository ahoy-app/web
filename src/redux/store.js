import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import chats, { sagas as chatsSagas } from './chats'
import user, { sagas as userSagas } from './user'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ chats, user })

function* rootSaga() {
  yield all([...chatsSagas, ...userSagas])
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
