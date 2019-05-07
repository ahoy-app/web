import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import { color } from '../style'

const styles = {
  background: color.background.light,

  height: '100%',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
}

const Room = ({ children }) => <div style={styles}>{children}</div>

Room.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Radium(Room)
