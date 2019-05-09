import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { color } from '../style'
import T from './Text'

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
    <Link to={`/${room.id}`} style={{ textDecoration: 'none' }}>
      <T.title_2>{room.name.charAt(0).toUpperCase()}</T.title_2>
    </Link>
  </div>
)

RoomBubble.propTypes = {
  room: PropTypes.object.isRequired,
}

export default RoomBubble
