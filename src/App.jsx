import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { load, loadingSelector, userSelector } from './redux/user'

import ChatApp from './layouts/ChatApp'
import LogIn from './layouts/LogIn'
import AuthCallback from './layouts/AuthCallback'

// const styles = {
//   height: '100vh',
//   width: '100vw',
// }

const LoadedApp = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route path="/callback" exact component={AuthCallback} />
        <Route path="/" component={() => (user ? <ChatApp /> : <LogIn />)} />
      </Switch>
    </Router>
  )
}

LoadedApp.propTypes = {
  user: PropTypes.object,
}

const App = ({ load, loading, user }) => {
  useEffect(() => {
    load()
  }, [])
  return loading ? <>Loading</> : <LoadedApp user={user} />
}

const mapStateToProps = state => ({
  loading: loadingSelector(state),
  user: userSelector(state),
})
const mapDispatchToProps = dispatch => ({
  load: () => dispatch(load()),
})

App.propTypes = {
  load: PropTypes.func,
  loading: PropTypes.bool,
  user: PropTypes.object,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
