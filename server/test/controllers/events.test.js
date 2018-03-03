import request from 'supertest'
import {app} from '../../src/index'

jest.mock('../../src/services/event', () => ({
  findEventByCode: () => ({code: 'event'})
}))

const server = app.server()

afterEach(() => {
  server.close()
})

describe('routes: /events/:code', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/events/code')

    expect(response.status).toBe(200)
    expect(response.body.code).toBe('event')
  })
})
