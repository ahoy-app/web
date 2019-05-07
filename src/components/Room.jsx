import React from 'react'
import Radium from 'radium'

import Input from '../components/Input'
import Messages from '../components/Messages'

import { receiveNewMessages, fetchOldMessages } from '../mocks/messages'
import { color } from '../style'

const styles = {
  background: color.background.light,

  height: '100%',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
}

const Room = () => (
  <div style={styles}>
    <Messages
      messages={receiveNewMessages()}
      fetchOldMessages={fetchOldMessages}
    />
    <Input
      onChange={event => {
        console.log('Updated text:' + event.target.value)
      }}
      onSend={() => {
        console.log('Send click')
      }}
    />
  </div>
)

export default Radium(Room)
