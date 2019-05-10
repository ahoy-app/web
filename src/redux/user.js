import { takeLatest, put, call } from 'redux-saga/effects'

import * as UserApi from '../api/user'
// Actions

const GH_LOG_IN = 'ahoy/user/GH_LOG_IN'
const LOG_IN = 'ahoy/user/LOG_IN'
const LOG_OUT = 'ahoy/user/LOG_OUT'
const GET_INFO = 'ahoy/user/GET_INFO'
const SET_INFO = 'ahoy/user/SET_INFO'

// Default state

const initialState = {
  user: {},
}

// Reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_INFO: {
      const { user } = payload
      return { ...state, user }
    }
    default: {
      return state
    }
  }
}

// Action Creators

export const ghLogin = () => ({ type: GH_LOG_IN })
export const login = (user, secret) => ({
  type: LOG_IN,
  payload: { user, secret },
})
export const logOut = () => ({ type: LOG_OUT })
export const getInfo = () => ({ type: GET_INFO })
export const setInfo = user => ({ type: SET_INFO, payload: { user } })

// Selectors

export const userSelector = state => state.user.user

// Side effects, only as applicable

function* ghLoginSaga() {
  try {
    const { access_token, secret } = yield call(UserApi.ghLogin)

    if (access_token && secret) {
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('secret', secret)

      const user = yield call(UserApi.getUser)

      yield put(setInfo(user))
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

      yield put(setInfo(user))
    }
  } catch (e) {
    console.error(e)
  }
}

function* logOutSaga() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('secret')

  yield put(setInfo({}))
}

export const sagas = [
  takeLatest(GH_LOG_IN, ghLoginSaga),
  takeLatest(LOG_IN, logInSaga),
  takeLatest(LOG_OUT, logOutSaga),
]
