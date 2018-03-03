import HttpStatusCodes from 'http-status-codes'

import {send} from './api'

export async function register(data) {
  try {
    const response = await send({path: 'users', method: 'post', data})

    return response.data
  } catch (err) {
    throw new Error('Cannot register user')
  }
}

export async function login(data) {
  try {
    const response = await send({path: 'users/login', method: 'post', data})

    return response.data
  } catch (err) {
    throw new Error('Cannot login')
  }
}

export async function getUser(token) {
  try {
    const response = await send({path: 'users/me', method: 'get', token})

    return response.data
  } catch (err) {
    throw new Error('User not found')
  }
}

export default {
  register,
  login,
  getUser
}
