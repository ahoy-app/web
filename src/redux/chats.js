import { takeLatest, take, put, call } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import * as RoomApi from '../api/room'
import Events, { EVENT_KEYS } from '../api/events'

// Actions

const LISTEN_EVENTS = 'ahoy/chats/LISTEN_EVENTS'
const FETCH_ROOM_LIST = 'ahoy/chats/FETCH_ROOM_LIST'
const SET_ROOM_LIST = 'ahoy/chats/SET_ROOM_LIST'
const FETCH_ROOM = 'ahoy/chats/FETCH_ROOM'
const SET_ROOM = 'ahoy/chats/SET_ROOM'
const FETCH_MESSAGES = 'ahoy/chats/FETCH_MESSAGES'
const SET_MESSAGES = 'ahoy/chats/SET_MESSAGES'

// Default state

const default_state = {
  rooms: [],
  room_info: {},
  messages: {},
}

// Reducer
export default function reducer(state = default_state, { type, payload }) {
  switch (type) {
    case SET_ROOM_LIST: {
      const { roomList } = payload
      return Object.assign({}, state, { rooms: roomList })
    }
    case SET_ROOM: {
      const { room } = payload
      const new_room_info = { ...state.room_info, [room.id]: room }
      return Object.assign({}, state, { room_info: new_room_info })
    }
    case SET_MESSAGES: {
      const { roomId, messages } = payload
      const new_messages = { ...state.messages, [roomId]: messages }
      return Object.assign({}, state, { messages: new_messages })
    }
    default: {
      return state
    }
  }
}

// Action Creators

export const listenEvents = () => ({ type: LISTEN_EVENTS })
export const fetchRoomList = () => ({ type: FETCH_ROOM_LIST })
export const setRoomList = roomList => ({
  type: SET_ROOM_LIST,
  payload: { roomList },
})
export const fetchRoom = roomId => ({
  type: FETCH_ROOM,
  payload: { roomId },
})
export const setRoom = room => ({
  type: SET_ROOM,
  payload: { room },
})
export const fetchMessages = roomId => ({
  type: FETCH_MESSAGES,
  payload: { roomId },
})
export const setMessages = (roomId, messages) => ({
  type: SET_MESSAGES,
  payload: { roomId, messages },
})

// Selectors

export const allRoomsSelector = state => state.chats.rooms
export const roomSelector = (state, roomId) => state.chats.room_info[roomId]
export const messagesSelector = (state, roomId) => {
  return state.chats.messages[roomId]
}

// Side effects, only as applicable

function* fetchRoomListSaga() {
  try {
    const roomList = yield call(RoomApi.getRooms)
    yield put(setRoomList(roomList))
  } catch (e) {
    console.error(e)
  }
}

function* fetchRoomSaga({ payload }) {
  try {
    const room = yield call(RoomApi.getRoom, payload.roomId)
    yield put(setRoom(room))
  } catch (e) {
    console.error(e)
  }
}

function* fetchMessagesSaga({ payload }) {
  try {
    const messages = yield call(RoomApi.getMessages, payload.roomId)
    yield put(setMessages(payload.roomId, messages))
  } catch (e) {
    console.error(e)
  }
}

// const eventEmiter = () => {
//   const events = new Events()
//   events.on(EVENT_KEYS.new_message, () => ({ type: 'PLACEHOLDER' }))
//
//   return eventChannel(events.channel)
// }

function* eventsSaga() {
  try {
    const events = new Events()
    events.on(EVENT_KEYS.new_message, () => ({ type: 'PLACEHOLDER' }))

    const channel = yield eventChannel(events.getChannel())

    while (true) {
      const action = yield take(channel)
      console.log(action)
      // yield put(action)
    }
  } catch (e) {
    console.error(e)
  }
}

export const sagas = [
  takeLatest(LISTEN_EVENTS, eventsSaga),
  takeLatest(FETCH_ROOM_LIST, fetchRoomListSaga),
  takeLatest(FETCH_ROOM, fetchRoomSaga),
  takeLatest(FETCH_MESSAGES, fetchMessagesSaga),
]
