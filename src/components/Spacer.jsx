import React from 'react'
import PropTypes from 'prop-types'

const Spacer = ({ top = 0, bottom = 0, left = 0, right = 0, children }) => (
  <div style={{ padding: `${top}px ${right}px ${bottom}px ${left}px` }}>
    {children}
  </div>
)

Spacer.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  children: PropTypes.object,
}

export default Spacer
