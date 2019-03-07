import React from 'react'
import Radium from 'radium'

import TextBox from './TextBox'

const styles = {
  // height: '40px',
  width: '100%',

  padding: '5px 10px 10px 10px',
  boxSizing: 'border-box',

  display: 'flex',
}

const Input = ({}) => (
  <div style={styles}>
    <TextBox />
  </div>
)

export default Radium(Input)
