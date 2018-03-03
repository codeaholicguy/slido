import {ActionTypes} from '../core/constants'

const initialState = {}

function setUser(state, payload) {
  const {user, token} = payload
  return {...state, ...user, token}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REGISTER:
      return setUser(state, action.payload)
    case ActionTypes.LOGIN:
      return setUser(state, action.payload)
    case ActionTypes.GET_USER:
      return setUser(state, action.payload)
    case ActionTypes.LOGOUT:
      return initialState
    default:
      return state
  }
}
