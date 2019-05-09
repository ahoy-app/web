import React from 'react'
import PropTypes from 'prop-types'

import { color, text } from '../style'

const styles = {
  background: color.background.dark,
  height: '40px',

  minWidth: '40px',

  borderRadius: '1rem',
  border: 'none',
  filter: 'drop-shadow(2px 5px 2px #0003)',

  ...text.body,
}

const Button = ({ onClick, children }) => (
  <button style={styles} onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object,
}

export default Button
