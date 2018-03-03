import {ActionTypes} from '../../core/constants'
import userService from '../../core/services/user'
import {saveToken} from '../../core/services/auth'

export function register(data) {
  return async dispatch => {
    try {
      const {user, token} = await userService.register(data)

      saveToken(token)

      dispatch({
        type: ActionTypes.REGISTER,
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
