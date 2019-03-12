import { Server } from 'mock-socket'

jest.useFakeTimers()

describe('Web socket mock-test', () => {
  it('connects', () => {
    const fakeURL = 'ws://localhost:8080'
    const mockServer = new Server(fakeURL)

    const msgs = []
    const mockCallback = jest.fn(msg => msgs.push(msg.data))

    mockServer.on('connection', socket => {
      // socket.on('message', () => {
      socket.send('test message from mock server')
      // })
    })

    const ws = new WebSocket(fakeURL)

    ws.onmessage = mockCallback

    jest.runOnlyPendingTimers()
    // NOTE: this timeout is for creating another micro task that will happen after the above one

    expect(msgs.length).toBe(1)
    expect(msgs[0]).toBe('test message from mock server')
    expect(mockCallback).toHaveBeenCalled()
    mockServer.stop()
  })
})
