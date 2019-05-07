import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import ChatApp from './layouts/ChatApp'
import LogIn from './layouts/LogIn'
import AuthCallback from './layouts/AuthCallback'

const styles = {
  height: '100vh',
  width: '100vw',
}

const App = () => (
  <div style={styles}>
    <Router>
      <Switch>
        <Route path="/login" exact component={LogIn} />
        <Route
          path="/logout"
          exact
          render={() => {
            localStorage.removeItem('access_token')
            return <Redirect to="/" />
          }}
        />
        <Route path="/callback" exact component={AuthCallback} />
        <Route
          path="/"
          render={() =>
            localStorage.getItem('access_token') ? (
              <ChatApp />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </Router>
  </div>
)

export default App
