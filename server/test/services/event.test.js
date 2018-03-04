import eventService from '../../src/services/event'

const expected = {
  id: 1,
  code: 'code',
  name: 'name',
  startsAt: '05-03-2018',
  endsAt: '08-03-2018',
  questions: []
}

jest.mock('../../src/db', () => {
  const stuff = {
    id: 1,
    code: 'code',
    name: 'name',
    startsAt: '05-03-2018',
    endsAt: '08-03-2018',
    questions: []
  }

  return {
    Event: {
      findOne: () => stuff
    }
  }
})

describe('eventService: findEventByCode', () => {
  test('should return as expected', async () => {
    const event = await eventService.findEventByCode('code')

    expect(event).toEqual(expected)
  })
})
