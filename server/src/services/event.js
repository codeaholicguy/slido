import db from '../db'

import questionService from './question'

export async function create(userId, {code, name, startsAt, endsAt}) {
  const event = await db.Event.create(
    {
      code,
      name,
      createdBy: userId,
      startsAt,
      endsAt
    },
    {raw: true}
  )

  return event
}

export async function findEventsByUser(userId) {
  const events = await db.Event.findAll({
    where: {
      createdBy: userId
    },
    order: [['createdAt', 'desc']],
    raw: true
  })

  return events
}

export async function findEventByCode(code) {
  const event = await db.Event.findOne({
    where: {
      code,
      startsAt: {$lte: Date.now()},
      endsAt: {$gte: Date.now()}
    },
    include: [
      {
        model: db.Question,
        as: 'questions',
        order: [['like', 'desc']]
      }
    ]
  })

  return event
}

export async function findUserEventByCode(userId, code) {
  const event = await db.Event.findOne({
    where: {
      code,
      createdBy: userId
    },
    include: [
      {
        model: db.Question,
        as: 'questions',
        order: [['like', 'desc']]
      }
    ]
  })

  return event
}

export async function getEventIdByCode(code) {
  const {id} = await db.Event.findOne({
    attributes: ['id'],
    where: {code},
    raw: true
  })

  if (!id) {
    throw new Error('Event code not found')
  }

  return id
}

export async function askQuestion(code, content) {
  const id = await getEventIdByCode(code)
  const question = await questionService.askQuestion(id, content)

  return question
}

export default {
  askQuestion,
  create,
  findEventsByUser,
  findEventByCode,
  findUserEventByCode
}
