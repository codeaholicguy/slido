const server = require('../../src/index').app.server()
const request = require('supertest')

afterEach(() => {
  server.close()
})

describe('routes: /sample/hello/:name', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/sample/hello/hoang')

    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Hello hoang')
  })
})

describe('routes: /sample/goodbye', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/sample/goodbye')

    expect(response.status).toEqual(200)
  })
})
