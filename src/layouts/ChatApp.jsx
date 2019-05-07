import React from 'react'
import Radium from 'radium'
import { Route } from 'react-router-dom'

import Room from '../components/Room'
import RoomSelector from '../components/RoomSelector'

const styles = {
  backgroundColor: 'yellow',
  height: '100%',
  width: '100%',

  display: 'flex',
}

const rooms = [{ id: 'my', name: 'My' }, { id: 'chat', name: 'Chat' }]

const ChatApp = () => (
  <div style={styles}>
    <RoomSelector rooms={rooms} />
    <Route path="/" exact component={() => <p />} />
    <Route path="/:roomId" exact component={Room} />
  </div>
)

export default Radium(ChatApp)
