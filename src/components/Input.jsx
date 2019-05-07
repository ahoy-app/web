import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import TextBox from './TextBox'
import Spacer from './Spacer'
import RoundButton from './RoundButton'

const styles = {
  // height: '40px',
  width: '100%',

  padding: '5px 10px 10px 10px',
  boxSizing: 'border-box',

  display: 'flex',
}

const Input = ({ onChange, onSend }) => (
  <div style={styles}>
    <TextBox onChange={onChange} onEnter={onSend} />
    <Spacer right={10} />
    <RoundButton onClick={onSend} />
  </div>
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
}

export default Radium(Input)
