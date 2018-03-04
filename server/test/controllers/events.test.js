import request from 'supertest'

import {app} from '../../src/index'
import eventService from '../../src/services/event'

const user = {id: 1}
const event = {
  code: 'code',
  name: 'name',
  startsAt: '05-03-2018',
  endsAt: '08-03-2018'
}

jest.mock('../../src/services/event', () => {
  const stuff = {
    code: 'code',
    name: 'name',
    startsAt: '05-03-2018',
    endsAt: '08-03-2018'
  }

  return {
    create: jest.fn((userId, event) => ({...stuff, id: 1})),
    findEventByCode: () => stuff
  }
})

jest.mock('../../src/middlewares', () => {
  const bodyParser = require('../../src/middlewares/body-parser')

  return {
    auth: () => {
      return async (ctx, next) => {
        ctx.user = {id: 1}
        next && (await next())
      }
    },
    bodyParser
  }
})

const server = app.server()

afterEach(() => {
  server.close()
})

describe('routes: POST /events', () => {
  test('should respond as expected', async () => {
    const response = await request(server)
      .post('/events')
      .send(event)

    expect(response.status).toBe(200)
    expect(eventService.create).toBeCalledWith(user.id, event)
  })
})

describe('routes: GET /events/:code', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/events/code')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(event)
  })
})
