import React from 'react'
import Radium from 'radium'

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
      alignSelf: message.from == '-' ? 'flex-end' : 'flex-start',
    }}
  >
    <Message message={message} />
  </div>
)

export default Radium(MessageRow)
