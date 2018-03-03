import {ActionTypes} from '../../core/constants'
import eventService from '../../core/services/event'

export function getEvents() {
  return async (dispatch, getState) => {
    try {
      const {token} = getState().user
      const events = await eventService.getEvents(token)

      dispatch({
        type: ActionTypes.GET_EVENTS,
        payload: events
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
