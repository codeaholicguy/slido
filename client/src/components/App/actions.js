import {ActionTypes} from '../../core/constants'
import userService from '../../core/services/user'
import authService from '../../core/services/auth'

export function getUser() {
  return async dispatch => {
    try {
      const token = authService.getToken()

      if (token) {
        const isValidToken = authService.isValidToken(token)

        if (isValidToken) {
          const user = await userService.getUser(token)

          dispatch({
            type: ActionTypes.GET_USER,
            payload: user
          })
        } else {
          authService.removeToken()
        }
      }
    } catch (err) {
      dispatch({
        type: ActionTypes.ERROR,
        payload: err.message
      })
    }
  }
}

export function logout() {
  return dispatch => {
    authService.removeToken()

    dispatch({
      type: ActionTypes.LOGOUT
    })
  }
}

export function resetError() {
  return dispatch => {
    dispatch({
      type: ActionTypes.RESET_ERROR
    })
  }
}
