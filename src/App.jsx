import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import ChatApp from './layouts/ChatApp'
import LogIn from './layouts/LogIn'
import AuthCallback from './layouts/AuthCallback'

const styles = {
  height: '100vh',
  width: '100vw',
}

const App = () => (
  <div style={styles}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" exact component={LogIn} />
          {/*<Route
            path="/logout"
            exact
            render={() => {
              localStorage.removeItem('access_token')
              return <Redirect to="/" />
            }}
          />*/}
          <Route path="/callback" exact component={AuthCallback} />
          <Route
            path="/"
            component={() =>
              localStorage.getItem('access_token') ? (
                <ChatApp />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Router>
    </Provider>
  </div>
)

export default App
