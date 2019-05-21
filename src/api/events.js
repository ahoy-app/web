import { API_HOST } from './utils'
export const EVENT_KEYS = {
  new_message: /room\..*\.new_message/,
  user_invited: /user\..*\.invited/,
  user_kicked: /user\..*\.kicked/,
}

class Events {
  constructor() {
    this.callbacks = []
    this._openWebSocket = this._openWebSocket.bind(this)
    this._onMessage = this._onMessage.bind(this)
    this._emitterFunction = this._emitterFunction.bind(this)
    this.getChannel = this.getChannel.bind(this)
  }

  on(regex, action) {
    this.callbacks.push({ regex, action })
  }

  _openWebSocket() {
    console.log('Connecting websocket')
    this.ws = new WebSocket(
      `wss://${API_HOST}/ws?token=${localStorage.getItem('access_token')}`
    )
    this.ws.onclose = this._openWebSocket
    this.ws.onmessage = this._onMessage
    return this.ws
  }

  _onMessage(message) {
    if (!this._emitter) return

    console.log('INCOMMING MESSAGE', this._emitter)
    const { key, body } = JSON.parse(message.data)
    const result = this.callbacks.find(({ regex }) => key.match(regex))

    if (result) {
      const { action } = result
      return this._emitter(action({ key, body }))
    } else {
      console.warn('Unsupported key', key)
    }
  }

  _emitterFunction(emitter) {
    console.log('EMMITERFUNCTION', emitter)

    this._emitter = emitter
    this._openWebSocket()
    // Return value of the invocation of the emitter function will be used as onClose
    return () => {
      //Unsubscribe function
      if (this.ws) this.ws.close()
    }
  }

  getChannel() {
    console.log('GETCHANNEL')
    // Bind the function to this object to access this
    return this._emitterFunction
  }
}

export default Events
