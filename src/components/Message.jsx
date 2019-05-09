import React from 'react'
import PropTypes from 'prop-types'

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

const Message = ({ message, me }) => (
  <div
    style={{
      ...styles,
      background: me ? color.background.color : color.background.light,
    }}
  >
    <T.body>{message.from}</T.body>
    <Spacer bottom={5} />
    <T.body>{message.content}</T.body>
  </div>
)

Message.propTypes = {
  message: PropTypes.object.isRequired,
  me: PropTypes.bool.isRequired,
}

export default Message
