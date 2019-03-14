import React from 'react'
import Radium from 'radium'

import Input from './components/Input'
import Room from './components/Room'
import RoomSelector from './components/RoomSelector'
import Messages from './components/Messages'

import { receiveNewMessages, fetchOldMessages } from './mocks/messages'

const styles = {
  backgroundColor: 'yellow',
  height: '100vh',
  width: '100vw',

  display: 'flex',
}

const App = () => (
  <div style={styles}>
    <RoomSelector rooms={['My', 'Chat']} />
    <Room>
      <Messages
        messages={receiveNewMessages()}
        fetchOldMessages={fetchOldMessages}
      />
      <Input onChange={() => {}} />
    </Room>
  </div>
)

export default Radium(App)
