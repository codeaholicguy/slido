import jwt from 'jsonwebtoken'
import HttpStatusCodes from 'http-status-codes'

import {JWT_SECRET} from '../config'
import userService from '../services/user'

export default function auth() {
  return async (ctx, next) => {
    const user = await authenticate()

    if (!user) {
      ctx.status = HttpStatusCodes.UNAUTHORIZED
    } else {
      ctx.user = user
      next && (await next())
    }

    async function authenticate() {
      const auth = ctx.request.headers.authorization

      if (auth && auth.startsWith('Bearer')) {
        const token = auth.substring('Bearer '.length)
        let decoded
        try {
          decoded = jwt.verify(token, JWT_SECRET)
        } catch (err) {
          return null
        }

        let user
        try {
          user = await userService.findUserById(decoded.id)
        } catch (err) {
          ctx.status = HttpStatusCodes.UNAUTHORIZED

          return
        }

        return user
      }
    }
  }
}
