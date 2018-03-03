import Sequelize from 'sequelize'

import db from '../db'

export async function askQuestion(eventId, content) {
  const question = await db.Question.create({eventId, content}, {raw: true})

  return question
}

export async function like(id) {
  await db.Question.update({like: Sequelize.literal('like + 1')}, {where: {id}})
}

export async function dislike(id) {
  await db.Question.update(
    {dislike: Sequelize.literal('dislike + 1')},
    {where: {id}}
  )
}

export default {
  askQuestion,
  like,
  dislike
}
