import { get } from './utils'
export async function getRooms() {
  console.log('YAY')
  const result = await get(`/rooms`)
  return result.rooms
}

export async function getRoom(roomId) {
  const room = await get(`/room/${roomId}`)
  return room
}
