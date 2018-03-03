import {controller, put} from 'route-decorators'
import HttpStatusCodes from 'http-status-codes'

import questionService from '../services/question'

import BaseController from './base'

@controller('/questions')
export default class QuestionController extends BaseController {
  @put('/:id/like')
  async like(ctx, next) {
    await questionService.like(ctx.params.id)

    ctx.status = HttpStatusCodes.OK
  }

  @put('/:id/dislike')
  async dislike(ctx, next) {
    await questionService.dislike(ctx.params.id)

    ctx.status = HttpStatusCodes.OK
  }
}
