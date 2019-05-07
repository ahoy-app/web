import React, { useState, useEffect } from 'react'

import TextBox from '../components/TextBox'
import T from '../components/Text'

const sendCredentialsBack = credentials => {
  console.log('Sending?')
  if (window.opener) {
    console.log('Sending!', credentials)
    window.opener.postMessage(credentials)
  }
}

const AuthCallback = () => {
  const [credentials, setCredentials] = useState({
    access_token: '',
    secret: '',
  })

  useEffect(() => {
    const access_token = window.location.search.split('access_token=')[1]
    setCredentials({ ...credentials, access_token })
  }, [])

  return (
    <>
      <T.title_2>Enter your secret pass</T.title_2>
      <TextBox
        onChange={e => {
          setCredentials({ ...credentials, secret: e.target.value })
        }}
        onEnter={() => sendCredentialsBack(credentials)}
      />
      {`Access:${credentials.access_token}\n`}
      {`Creds:${credentials.secret}\n`}
    </>
  )
}

export default AuthCallback
