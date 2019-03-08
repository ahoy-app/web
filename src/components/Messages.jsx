import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import MessageRow from './MessageRow'

const styles = {
  height: '100%',
  width: '100%',

  padding: '5px 10px 5px 10px',
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}

const Messages = ({ messages }) => (
  <div style={styles}>
    {messages.map(message => (
      <MessageRow message={message} key={message.id} />
    ))}
  </div>
)

Messages.propTypes = {
  messages: PropTypes.array,
}
export default Radium(Messages)
