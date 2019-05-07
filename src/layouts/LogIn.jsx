import React from 'react'
import PropTypes from 'prop-types'

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

function ghLogin(history) {
  const popup = window.open(
    'https://github.com/login/oauth/authorize?scope=user:email&client_id=4980e711a8dbd46fc066',
    'GitHub Login',
    'height=700,width=600,menubat=no'
  )

  window.addEventListener('message', function(event) {
    console.log(event.data)
    localStorage.setItem('access_token', event.data.access_token)
    localStorage.setItem('secret', event.data.secret)
    popup.close()
    history.push('/')
  })
}

const LogIn = ({ onChange = () => {}, onSend = () => {}, history }) => (
  <div style={styles}>
    <div style={{ width: '50%' }}>
      <T.title_1>Log In</T.title_1>
      <Spacer bottom={10} />
    </div>
    <div style={{ width: '50%' }}>
      <TextBox onChange={onChange} onEnter={onSend} />
      <Spacer bottom={10} />
      <TextBox onChange={onChange} onEnter={onSend} />
      <Spacer bottom={10} />
    </div>
    <div style={{ width: '50%' }}>
      <Button onClick={() => ghLogin(history)}>
        <T.callout>Log in with GitHub</T.callout>
      </Button>
    </div>
  </div>
)

LogIn.propTypes = {
  onChange: PropTypes.func,
  onSend: PropTypes.func,
  history: PropTypes.object,
}
export default LogIn
