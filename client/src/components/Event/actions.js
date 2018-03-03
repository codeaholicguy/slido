import {ActionTypes} from '../../core/constants'
import eventService from '../../core/services/event'
import questionService from '../../core/services/question'

export function getEvent(code) {
  return async (dispatch, getState) => {
    try {
      const {token} = getState().user

      let event

      if (token) {
        event = await eventService.getUserEvent(code, token)
      } else {
        event = await eventService.getEvent(code)
      }

      dispatch({
        type: ActionTypes.GET_EVENT,
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

export function askQuestion(data) {
  return async (dispatch, getState) => {
    try {
      const {event} = getState()
      const question = await eventService.askQuestion(event.code, data)

      dispatch({
        type: ActionTypes.GET_EVENT,
        payload: {
          ...event,
          questions: [...event.questions, question]
        }
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

export function likeQuestion(id) {
  return async (dispatch, getState) => {
    try {
      const {event} = getState()

      await questionService.like(id)

      const questions = event.questions.map(question => {
        if (question.id === id) {
          return {
            ...question,
            like: question.like + 1
          }
        }

        return question
      })

      dispatch({
        type: ActionTypes.GET_EVENT,
        payload: {
          ...event,
          questions
        }
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

export function dislikeQuestion(id) {
  return async (dispatch, getState) => {
    try {
      const {event} = getState()

      await questionService.dislike(id)

      const questions = event.questions.map(question => {
        if (question.id === id) {
          return {
            ...question,
            dislike: question.dislike + 1
          }
        }

        return question
      })

      dispatch({
        type: ActionTypes.GET_EVENT,
        payload: {
          ...event,
          questions
        }
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
