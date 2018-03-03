import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import App from './App'
import {getUser, logout, resetError} from './actions'

export default connect(({user, error, routing}) => ({user, error, routing}), {
  getUser,
  logout,
  push,
  resetError
})(App)
