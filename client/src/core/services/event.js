import HttpStatusCodes from 'http-status-codes'

import {send} from './api'

export async function createEvent(data, token) {
  try {
    const response = await send({path: 'events', method: 'post', token, data})

    return response.data
  } catch (err) {
    throw new Error('Cannot create event')
  }
}

export async function getEvents(token) {
  try {
    const response = await send({path: 'events', method: 'get', token})

    return response.data
  } catch (err) {
    throw new Error('Cannot get user events')
  }
}

export async function getEvent(code) {
  try {
    const response = await send({path: `events/${code}`, method: 'get'})

    return response.data
  } catch (err) {
    throw new Error('Cannot get event')
  }
}

export async function getUserEvent(code, token) {
  try {
    const response = await send({
      path: `events/${code}/admin`,
      method: 'get',
      token
    })

    return response.data
  } catch (err) {
    throw new Error('Cannot get event')
  }
}
export async function askQuestion(code, data) {
  try {
    const response = await send({
      path: `events/${code}/ask`,
      method: 'post',
      data
    })

    return response.data
  } catch (err) {
    throw new Error('Cannot ask question')
  }
}

export default {
  askQuestion,
  createEvent,
  getEvent,
  getUserEvent,
  getEvents
}
