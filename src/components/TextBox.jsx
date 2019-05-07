import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import { color, text } from '../style'

const styles = {
  background: color.background.dark,
  height: '40px',
  width: '100%',
  flex: 1,

  borderRadius: '1rem',
  border: 'none',
  filter: 'drop-shadow(2px 5px 2px #0003)',

  padding: '0px 10px 0px 10px',
  boxSizing: 'border-box',

  color: 'black',

  ...text.body,
}

const TextBox = ({ value, onChange, onEnter }) => (
  <input
    type="text"
    style={styles}
    value={value}
    onChange={onChange}
    onKeyDown={e => (e.key === 'Enter' ? onEnter() : null)}
  />
)

TextBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
}

export default Radium(TextBox)
