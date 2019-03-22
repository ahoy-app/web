import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import { color, shadow } from './style'

const styles = {
  background: color.background.dark,

  minHeight: '40px',
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
    style={[
      styles,
      {
        background: me ? color.background.color : color.background.light,
      },
    ]}
  >
    <span>{message.from}</span>
    <span>{message.content}</span>
  </div>
)

Message.propTypes = {
  message: PropTypes.object.isRequired,
  me: PropTypes.bool.isRequired,
}

export default Radium(Message)
