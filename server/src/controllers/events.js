import {controller, get, post} from 'route-decorators'
import HttpStatusCodes from 'http-status-codes'

import {bodyParser, auth} from '../middlewares'
import eventService from '../services/event'

import BaseController from './base'

@controller('/events')
export default class EventsController extends BaseController {
  @post('', bodyParser(), auth())
  async create(ctx, next) {
    try {
      const {code, name, startsAt, endsAt} = ctx.request.body
      const userId = ctx.user.id

      const event = await eventService.create(userId, {
        code,
        name,
        startsAt,
        endsAt
      })

      ctx.body = event
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        ctx.status = HttpStatusCodes.BAD_REQUEST
      } else {
        ctx.status = HttpStatusCodes.INTERNAL_SERVER_ERROR
      }
    }
  }

  @get('', auth())
  async getUserEvents(ctx, next) {
    const userId = ctx.user.id
    const events = await eventService.findEventsByUser(userId)

    ctx.body = events
  }

  @get('/:code')
  async getEvent(ctx, next) {
    const code = ctx.params.code
    const event = await eventService.findEventByCode(code)

    if (event) {
      ctx.body = event
    } else {
      ctx.status = HttpStatusCodes.NOT_FOUND
    }
  }

  @get('/:code/admin', auth())
  async getUserEvent(ctx, next) {
    const code = ctx.params.code
    const userId = ctx.user.id
    const event = await eventService.findUserEventByCode(userId, code)

    if (event) {
      ctx.body = event
    } else {
      ctx.status = HttpStatusCodes.NOT_FOUND
    }
  }

  @post('/:code/ask', bodyParser())
  async askQuestion(ctx, next) {
    const code = ctx.params.code
    const {content} = ctx.request.body
    const event = await eventService.askQuestion(code, content)

    ctx.body = event
  }
}
