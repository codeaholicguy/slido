import {ActionTypes} from '../../core/constants'
import userService from '../../core/services/user'
import {saveToken} from '../../core/services/auth'

export function login(data) {
  return async dispatch => {
    try {
      const {user, token} = await userService.login(data)

      saveToken(token)

      dispatch({
        type: ActionTypes.LOGIN,
        payload: {user, token}
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
