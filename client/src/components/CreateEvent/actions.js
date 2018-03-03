import {ActionTypes} from '../../core/constants'
import eventService from '../../core/services/event'

export function createEvent(data) {
  return async (dispatch, getState) => {
    try {
      const {token} = getState().user
      const event = await eventService.createEvent(data, token)

      dispatch({
        type: ActionTypes.CREATE_EVENT,
        payload: event
      })
    } catch (err) {
      dispatch({
        type: ActionTypes.ERROR,
        payload: err.message
      })

      throw err
    }
  }
}
