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
const SEND_MESSAGE = 'ahoy/chats/SEND_MESSAGE'
const ADD_NEW_MESSAGE = 'ahoy/chats/ADD_NEW_MESSAGE'
const ADD_NEW_ROOM = 'ahoy/chats/ADD_NEW_ROOM'
const DELETE_ROOM = 'ahoy/chats/DELETE_ROOM'

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
    case ADD_NEW_MESSAGE: {
      const { message } = payload
      const room_messages = state.messages[message.to] || []
      room_messages.unshift(message)
      const new_messages = {
        ...state.messages,
        [message.to]: [...room_messages],
      }
      return Object.assign({}, state, { messages: new_messages })
    }
    case ADD_NEW_ROOM: {
      const { room } = payload
      const { id, name } = room
      const new_room_list = state.rooms
      new_room_list.unshift({ id, name })
      console.log(new_room_list)
      return Object.assign({}, state, {
        rooms: [...new_room_list],
      })
    }
    case DELETE_ROOM: {
      const { room } = payload
      const new_room_list = state.rooms.filter(r => r.id != room.id)
      // eslint-disable-next-line no-unused-vars
      const { [room.id]: _xxx, ...new_room_info } = state.room_info
      // eslint-disable-next-line no-unused-vars
      const { [room.id]: _yyy, ...new_messages } = state.messages
      console.log(new_room_list, new_room_info, new_messages)
      return {
        ...state,
        rooms: [...new_room_list],
        room_info: new_room_info,
        messages: new_messages,
      }
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
export const sendMessage = (roomId, content) => ({
  type: SEND_MESSAGE,
  payload: { roomId, content },
})
export const addNewMessage = message => ({
  type: ADD_NEW_MESSAGE,
  payload: { message },
})
export const addRoom = room => ({
  type: ADD_NEW_ROOM,
  payload: { room },
})
export const deleteRoom = room => ({
  type: DELETE_ROOM,
  payload: { room },
})

// Selectors

export const allRoomsSelector = state => state.chats.rooms
export const roomSelector = (state, roomId) => state.chats.room_info[roomId]
export const messagesSelector = (state, roomId) => {
  return state.chats.messages[roomId]
}

// Side effects, only as applicable

function* loggedSaga() {
  try {
    yield put(listenEvents())
    yield put(fetchRoomList())
  } catch (e) {
    console.error(e)
  }
}

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

/*
{
type: 'ahoy/chats/SEND_MESSAGE',
payload: { roomId: 'bc984df0', message: 'Me encanta' }
}
*/
function* sendMessageSaga({ payload }) {
  try {
    const { roomId, content } = payload
    yield call(RoomApi.sendMessage, roomId, content)
  } catch (e) {
    console.error(e)
  }
}

function* eventsSaga() {
  try {
    const events = new Events()
    events.on(EVENT_KEYS.new_message, ({ body }) => addNewMessage(body))
    events.on(EVENT_KEYS.user_invited, ({ body }) => addRoom(body))
    events.on(EVENT_KEYS.user_kicked, ({ body }) => deleteRoom(body))

    const channel = yield eventChannel(events.getChannel())

    while (true) {
      const action = yield take(channel)
      console.log(action)
      yield put(action)
    }
  } catch (e) {
    console.error(e)
  }
}

export const sagas = [
  takeLatest('ahoy/user/LOGED_IN', loggedSaga),
  takeLatest(LISTEN_EVENTS, eventsSaga),
  takeLatest(FETCH_ROOM_LIST, fetchRoomListSaga),
  takeLatest(FETCH_ROOM, fetchRoomSaga),
  takeLatest(FETCH_MESSAGES, fetchMessagesSaga),
  takeLatest(SEND_MESSAGE, sendMessageSaga),
]
