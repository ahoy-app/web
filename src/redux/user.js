import { takeLatest, put, call } from 'redux-saga/effects'

import * as UserApi from '../api/user'
// Actions

const LOAD = 'ahoy/user/LOAD'
const LOADED = 'ahoy/user/LOADED'
const GH_LOG_IN = 'ahoy/user/GH_LOG_IN'
const LOG_IN = 'ahoy/user/LOG_IN'
const LOGED_IN = 'ahoy/user/LOGED_IN'
const LOG_OUT = 'ahoy/user/LOG_OUT'
const LOGED_OUT = 'ahoy/user/LOGED_OUT'
const GET_INFO = 'ahoy/user/GET_INFO'

// Default state

const initialState = {
  loading: true, //Indicates if the app is still loading
  user: undefined, //If empty, indicates that the user is not logged
}

// Reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOADED: {
      return { ...state, loading: false }
    }
    case LOGED_IN: {
      const { user } = payload
      return { ...state, user }
    }
    case LOGED_OUT: {
      return { ...state, user: undefined }
    }
    default: {
      return state
    }
  }
}

// Action Creators

export const load = () => ({ type: LOAD })
export const loaded = () => ({ type: LOADED })
export const ghLogin = () => ({ type: GH_LOG_IN })
export const login = (user, secret) => ({
  type: LOG_IN,
  payload: { user, secret },
})
export const logOut = () => ({ type: LOG_OUT })
export const getInfo = () => ({ type: GET_INFO })
export const logedIn = user => ({ type: LOGED_IN, payload: { user } })
export const logedOut = () => ({ type: LOGED_OUT })

// Selectors

export const userSelector = state => state.user.user
export const loadingSelector = state => state.user.loading

// Side effects, only as applicable

function* initSaga() {
  const access_token = localStorage.getItem('access_token')
  if (!access_token) {
    yield put(loaded()) //Set loading to false and user to 'not logged'
  } else {
    try {
      const user = yield call(UserApi.getUser)
      yield put(loaded())
      yield put(logedIn(user))
    } catch (e) {
      yield put(loaded())
    }
  }
}

function* ghLoginSaga() {
  try {
    const { access_token, secret } = yield call(UserApi.ghLogin)

    if (access_token && secret) {
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('secret', secret)

      const user = yield call(UserApi.getUser)

      yield put(logedIn(user))
    }
  } catch (e) {
    console.error(e)
  }
}

function* logInSaga({ payload }) {
  const { user, secret } = payload
  try {
    const { access_token } = yield call(UserApi.logIn, user, secret)

    if (access_token) {
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('secret', secret)

      const user = yield call(UserApi.getUser)

      yield put(logedIn(user))
    }
  } catch (e) {
    console.error(e)
  }
}

function* logOutSaga() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('secret')

  yield put(logedOut())
}

export const sagas = [
  takeLatest(LOAD, initSaga),
  takeLatest(GH_LOG_IN, ghLoginSaga),
  takeLatest(LOG_IN, logInSaga),
  takeLatest(LOG_OUT, logOutSaga),
]
