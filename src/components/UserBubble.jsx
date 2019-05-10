import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { userSelector, logOut } from '../redux/user'

import { color } from '../style'
import T from './Text'

const styles = {
  background: color.background.light,
  height: '40px',
  width: '40px',

  borderRadius: '50%',

  textAlign: 'center',
  lineHeight: '40px',
}

const User = ({ user, logOut }) => (
  <div style={styles} onClick={logOut} alt="Logout">
    <T.title_2>{user.id.charAt(0).toUpperCase()}</T.title_2>
  </div>
)

User.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
}

const mapStateToProps = state => ({
  user: userSelector(state),
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
