import {ActionTypes} from '../core/constants'

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_EVENTS:
      return [...initialState, ...action.payload]
    case ActionTypes.CREATE_EVENT:
      return [...state, action.payload]
    case ActionTypes.LOGOUT:
      return initialState
    default:
      return state
  }
}
