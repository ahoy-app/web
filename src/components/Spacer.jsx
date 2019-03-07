import React from 'react'
import Radium from 'radium'

const Spacer = ({ top = 0, bottom = 0, left = 0, right = 0, children }) => (
  <div style={{ padding: `${top}px ${right}px ${bottom}px ${left}px` }}>
    {children}
  </div>
)

export default Radium(Spacer)
