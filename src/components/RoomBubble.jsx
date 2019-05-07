import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import { color } from '../style'

const styles = {
  background: color.background.light,
  height: '40px',
  width: '40px',

  borderRadius: '50%',

  textAlign: 'center',
  lineHeight: '40px',
}

const RoomBubble = ({ room }) => (
  <div style={styles}>
    {console.log(room)}
    {room.charAt(0).toUpperCase()}
  </div>
)

RoomBubble.propTypes = {
  room: PropTypes.string.isRequired,
}

export default Radium(RoomBubble)
