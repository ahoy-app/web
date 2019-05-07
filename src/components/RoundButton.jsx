import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import { color } from '../style'

const styles = {
  background: color.background.dark,
  height: '40px',

  minWidth: '40px',

  borderRadius: '1rem',
  border: 'none',
  filter: 'drop-shadow(2px 5px 2px #0003)',

  lineHeight: '2rem',
  fontSize: '1em',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
}

const RoundButton = ({ onClick }) => <button style={styles} onClick={onClick} />

RoundButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Radium(RoundButton)
