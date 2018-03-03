import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../config'

export function createAuthToken(userId) {
  return jwt.sign({id: userId}, JWT_SECRET, {expiresIn: '30 days'})
}

export default {
  createAuthToken
}
