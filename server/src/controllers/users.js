import {controller, get, post} from 'route-decorators'
import HttpStatusCodes from 'http-status-codes'

import {bodyParser, auth} from '../middlewares'
import userService from '../services/user'
import authService from '../services/auth'

import BaseController from './base'

@controller('/users')
export default class UsersController extends BaseController {
  @post('', bodyParser())
  async register(ctx, next) {
    try {
      const {email, fullName, password} = ctx.request.body
      const user = await userService.register(email, fullName, password)

      ctx.body = {
        user,
        token: authService.createAuthToken(user.id)
      }
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        ctx.status = HttpStatusCodes.BAD_REQUEST
      } else {
        ctx.status = HttpStatusCodes.INTERNAL_SERVER_ERROR
      }
    }
  }

  @post('/login', bodyParser())
  async login(ctx, next) {
    try {
      const {email, password} = ctx.request.body
      const user = await userService.authenticate(email, password)

      ctx.body = {
        user,
        token: authService.createAuthToken(user.id)
      }
    } catch (err) {
      ctx.status = HttpStatusCodes.BAD_REQUEST
      ctx.body = err.message
    }
  }

  @get('/me', auth())
  async getMe(ctx, next) {
    const user = ctx.user

    ctx.body = {
      user,
      token: authService.createAuthToken(user.id)
    }
  }
}
