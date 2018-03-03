import {ActionTypes} from '../core/constants'

const initialState = ''

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ERROR:
      return action.payload
    case ActionTypes.RESET_ERROR:
      return initialState
    default:
      return state
  }
}
