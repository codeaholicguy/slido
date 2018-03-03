import db from '../db'

import {hashPassword, verifyPassword} from './crypto'

export async function register(email, fullName, password) {
  const user = await db.User.create({
    email,
    fullName,
    password: await hashPassword(password)
  }, {raw: true})

  return user
}

export async function authenticate(email, password) {
  const user = await db.User.findOne({
    where: {
      email
    },
    raw: true
  })

  if (!user) {
    throw new Error('User not found')
  }

  const validPassword = await verifyPassword(password, user.password)

  if (!validPassword) {
    throw new Error('Your password is not correct')
  }

  return _sanitize(user)
}

export async function findUserById(id) {
  const user = await db.User.findById(id, {raw: true})

  if (!user) {
    throw new Error('User not found')
  }

  return _sanitize(user)
}

// Private methods
function _sanitize(user) {
  delete user.password
  delete user.createdAt
  delete user.updatedAt

  return user
}

export default {
  register,
  authenticate,
  findUserById
}
