import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

const styles = {
  background: 'linear-gradient(135deg, #fff 0%, #e8e8e8 100%)',

  minHeight: '40px',
  width: '500px',

  padding: '5px 10px 5px 10px',
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',

  borderRadius: '10px',
  filter: 'drop-shadow(2px 5px 2px #0003)',
}

const Message = ({ message }) => (
  <div style={styles}>
    <span>{message.from}</span>
    <span>{message.content}</span>
  </div>
)

Message.propTypes = {
  message: PropTypes.object,
}

export default Radium(Message)
