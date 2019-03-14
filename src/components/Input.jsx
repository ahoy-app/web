import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import TextBox from './TextBox'

const styles = {
  // height: '40px',
  width: '100%',

  padding: '5px 10px 10px 10px',
  boxSizing: 'border-box',

  display: 'flex',
}

const Input = ({ onChange }) => (
  <div style={styles}>
    <TextBox onChange={onChange} />
  </div>
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default Radium(Input)
