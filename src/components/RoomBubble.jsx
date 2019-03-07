import React from 'react'
import Radium from 'radium'

const styles = {
  backgroundColor: 'gray',
  height: '40px',
  width: '40px',

  borderRadius: '50%',

  textAlign: 'center',
  lineHeight: '40px',
}

const RoomBubble = ({ room }) => (
  <div style={styles}>
    {console.log(room)}
    {room.charAt(0)}
  </div>
)

export default Radium(RoomBubble)
