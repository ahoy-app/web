import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

const styles = {
  background: 'linear-gradient(135deg, #cee 0%, #08a 100%)',

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
