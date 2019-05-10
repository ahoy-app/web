import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ghLogin, login } from '../redux/user'

import T from '../components/Text'
import Spacer from '../components/Spacer'
import TextBox from '../components/TextBox'
import Button from '../components/Button'

const styles = {
  boxSizing: 'border-box',
  // height: '50%',
  width: '100%',

  textAlign: 'center',
  padding: '50px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const LogIn = ({ ghLogin, login }) => {
  const [user, setUser] = useState('')
  const [secret, setSecret] = useState('')

  return (
    <div style={styles}>
      <div style={{ width: '50%' }}>
        <T.title_1>Log In</T.title_1>
        <Spacer bottom={10} />
      </div>
      <div style={{ width: '50%' }}>
        <TextBox onChange={e => setUser(e.target.value)} onEnter={() => {}} />
        <Spacer bottom={10} />
        <TextBox onChange={e => setSecret(e.target.value)} onEnter={() => {}} />
        <Spacer bottom={10} />
      </div>
      <div style={{ width: '70%' }}>
        <Button onClick={() => login(user, secret)}>
          <T.callout>Log in</T.callout>
        </Button>

        <Button onClick={() => ghLogin()}>
          <T.callout>Log in with GitHub</T.callout>
        </Button>
      </div>
    </div>
  )
}

LogIn.propTypes = {
  ghLogin: PropTypes.func,
  login: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  ghLogin: () => dispatch(ghLogin()),
  login: (user, secret) => dispatch(login(user, secret)),
})
export default connect(
  null,
  mapDispatchToProps
)(LogIn)
