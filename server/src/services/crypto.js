import Promise from 'bluebird'
import bcrypt from 'bcryptjs'

Promise.promisifyAll(bcrypt)

/**
 * Hashes a password with a dynamically generated salt.
 * @param {String} pwd - the password to hash.
 * @return {String} the hased password.
 */
export async function hashPassword(pwd) {
  const salt = await bcrypt.genSaltAsync(10)
  const hashed = await bcrypt.hashAsync(pwd, salt)

  return hashed
}

/**
 * Checks a password against a hash to see if they match.
 * @param {String} pwd - the password to compare.
 * @param {String} hash - the hash to compare.
 * @return {Boolean} the match result.
 */
export function verifyPassword(pwd, hash) {
  return bcrypt.compareAsync(pwd, hash)
}

export default {
  hashPassword,
  verifyPassword
}
