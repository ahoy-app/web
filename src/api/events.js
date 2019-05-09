import { API_HOST } from './utils'
export const EVENT_KEYS = {
  new_message: /room\.[^.]*\.new_message/,
}

class Events {
  constructor() {
    this.callbacks = []
  }

  on(regex, action) {
    this.callbacks.push({ regex, action })
  }

  _openWebSocket() {
    console.log('Connecting websocket')
    this.ws = new WebSocket(
      `ws://${API_HOST}/ws?token=${localStorage.getItem('access_token')}`
    )
    this.ws.onclose = this._openWebSocket
    return this.ws
  }

  getChannel() {
    const ws = this._openWebSocket()
    return emitter => {
      ws.onmessage = message => {
        console.log('Received', message)
        const { key, body } = JSON.parse(message.data)
        const result = this.callbacks.find(({ regex }) => key.match(regex))

        if (result) {
          const { action } = result
          return emitter(action({ key, body }))
        } else {
          console.warn('Unsupported key', key)
        }
      }
      return () => {
        //Unsubscribe function
        ws.close()
      }
    }
  }
}

export default Events
