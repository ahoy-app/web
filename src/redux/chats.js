import { takeLatest, put, call } from 'redux-saga/effects'
import * as RoomApi from '../api/room'

// Actions

const FETCH_ROOM_LIST = 'ahoy/chats/FETCH_ROOM_LIST'
const SET_ROOM_LIST = 'ahoy/chats/SET_ROOM_LIST'
const FETCH_ROOM = 'ahoy/chats/FETCH_ROOM'
const SET_ROOM = 'ahoy/chats/SET_ROOM'

// Default state

const default_state = {
  rooms: [],
  room_info: {},
}

// Reducer
export default function reducer(state = default_state, { type, payload }) {
  switch (type) {
    case SET_ROOM_LIST:
      return { ...state, rooms: payload.roomList }
    case SET_ROOM:
      return {
        ...state,
        room_info: {
          ...state.room_info,
          [payload.room.id]: payload.room,
        },
      }
    default:
      return state
  }
}

// Action Creators

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

//Selectors

export const allRoomsSelector = state => state.chats.rooms
export const allRoomsIdSelector = state => Object.keys(state.chats.rooms)
export const roomSelector = (state, props) =>
  allRoomsSelector(state)[props.roomId]

// Side effects, only as applicable

function* fetchRoomListSaga() {
  try {
    const roomList = yield call(RoomApi.getRooms)
    console.log(roomList)

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

export const sagas = [
  takeLatest(FETCH_ROOM_LIST, fetchRoomListSaga),
  takeLatest(FETCH_ROOM, fetchRoomSaga),
]
