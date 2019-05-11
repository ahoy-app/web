import React from 'react'
import PropTypes from 'prop-types'

import { downloadLink } from '../api/utils'
import { color, shadow } from '../style'
import T from './Text'
import Spacer from './Spacer'

const styles = {
  background: color.background.dark,

  minHeight: '20px',
  width: '500px',

  padding: '5px 10px 5px 10px',
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',

  borderRadius: '10px',
  filter: shadow.light,
}

const AttachmentMessage = ({ message }) => (
  <a href={downloadLink(message)}>Download</a>
)

AttachmentMessage.propTypes = {
  message: PropTypes.object.isRequired,
}

const TextMessage = ({ message }) => <T.body>{message.content}</T.body>

TextMessage.propTypes = {
  message: PropTypes.object.isRequired,
}

const Message = ({ message, me }) => (
  <div
    style={{
      ...styles,
      background: me ? color.background.color : color.background.light,
    }}
  >
    <T.body>{message.from}</T.body>
    <Spacer bottom={5} />
    {message.type == 'text' ? (
      <TextMessage message={message} />
    ) : (
      <AttachmentMessage message={message} />
    )}
  </div>
)

Message.propTypes = {
  message: PropTypes.object.isRequired,
  me: PropTypes.bool.isRequired,
}

export default Message
