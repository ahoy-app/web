import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

const styles = {
  backgroundColor: 'white',
  height: '40px',
  // width: '100%',
  flex: 1,

  borderRadius: '1rem',
  border: 'none',
  filter: 'drop-shadow(2px 5px 2px #0003)',

  padding: '0px 10px 0px 10px',
  boxSizing: 'border-box',

  lineHeight: '2rem',
  fontSize: '1em',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
}

const TextBox = ({ value, onChange }) => (
  <input style={styles} value={value} onChange={onChange} />
)

TextBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Radium(TextBox)
