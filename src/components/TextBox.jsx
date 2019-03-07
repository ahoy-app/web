import React from 'react'
import Radium from 'radium'

const styles = {
  backgroundColor: 'white',
  // height: '40px',
  width: '100%',

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

const TextBox = ({}) => <input style={styles} />

export default Radium(TextBox)
