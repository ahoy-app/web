import { get } from './utils'
export async function getRooms() {
  const result = await get(`/rooms`)
  return result.rooms
}

export async function getRoom(roomId) {
  const room = await get(`/room/${roomId}`)
  return room
}

export async function getMessages(roomId) {
  const messages = await get(`/room/${roomId}/messages`)
  return messages
}
