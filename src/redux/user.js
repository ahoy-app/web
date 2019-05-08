const SIGNUP_REQUEST = 'AUTH/SIGNUP_REQUEST'
const SIGNUP_SUCCESS = 'AUTH/SIGNUP_SUCCESS'
const SIGNUP_FAILURE = 'AUTH/SIGNUP_FAILURE'
const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE'
const LOGOUT = 'AUTH/LOGOUT'

const initialState = {
  user: null,
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null }

    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.user }

    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.error }

    case LOGOUT:
      return { ...state, user: null }

    default:
      return state
  }
}

export const actions = {
  signup: (email, password) => ({ type: SIGNUP_REQUEST, email, password }),
  login: (email, password) => ({ type: LOGIN_REQUEST, email, password }),
  logout: () => ({ type: LOGOUT }),
}
