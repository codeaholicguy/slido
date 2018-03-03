import {ActionTypes} from '../core/constants'

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_EVENT:
      return {...initialState, ...action.payload}
    case ActionTypes.LOGOUT:
      return initialState
    default:
      return state
  }
}
