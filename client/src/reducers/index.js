import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import user from './user'
import event from './event'
import events from './events'
import error from './error'

export default combineReducers({
  routing: routerReducer,
  error,
  user,
  event,
  events
})
