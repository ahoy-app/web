import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

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

RoomBubble.propTypes = {
  room: PropTypes.string,
}

export default Radium(RoomBubble)
