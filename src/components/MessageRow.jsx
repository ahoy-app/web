import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import Message from './Message'

const styles = {
  padding: '5px 0px 5px 0px',
  boxSizing: 'border-box',

  // alignSelf: 'flex-end',
}

const MessageRow = ({ message }) => (
  <div
    style={{
      ...styles,
      alignSelf: message.from === '-' ? 'flex-end' : 'flex-start',
    }}
  >
    <Message message={message} />
  </div>
)

MessageRow.propTypes = {
  message: PropTypes.object,
}

export default Radium(MessageRow)
