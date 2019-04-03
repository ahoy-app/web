import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  background: 'none',
}

const __NaMe__ = ({ attr }) => (
  <div style={styles}>
    {attr}
    {attr}
  </div>
)

__NaMe__.propTypes = {
  attr: PropTypes.object.isRequired,
}

export default __NaMe__
