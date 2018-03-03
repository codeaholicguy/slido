import {send} from './api'

export async function like(id) {
  try {
    await send({
      path: `questions/${id}/like`,
      method: 'put'
    })
  } catch (err) {
    throw new Error('Cannot like question')
  }
}

export async function dislike(id) {
  try {
    await send({
      path: `questions/${id}/dislike`,
      method: 'put'
    })
  } catch (err) {
    throw new Error('Cannot dislike question')
  }
}

export default {
  like,
  dislike
}
