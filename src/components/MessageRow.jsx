import React from 'react'
import PropTypes from 'prop-types'

import Message from './Message'

const styles = {
  padding: '5px 0px 5px 0px',
  boxSizing: 'border-box',

  // alignSelf: 'flex-end',
}

const MessageRow = ({ message }) => {
  const me = message.from === '-'
  return (
    <div
      style={{
        ...styles,
        alignSelf: me ? 'flex-end' : 'flex-start',
      }}
    >
      <Message message={message} me={me} />
    </div>
  )
}

MessageRow.propTypes = {
  message: PropTypes.object.isRequired,
}

export default MessageRow
