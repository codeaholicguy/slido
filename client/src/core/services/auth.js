export function saveToken(token) {
  sessionStorage.setItem('token', token)
}

export function getToken() {
  return sessionStorage.getItem('token')
}

export function removeToken() {
  sessionStorage.removeItem('token')
}

export function isValidToken(token) {
  let payload
  try {
    payload = JSON.parse(window.atob(token.split('.')[1]))
  } catch (err) {
    return false
  }

  const expiredAt = payload.exp * 1000
  const now = Date.now()

  if (expiredAt < now) {
    return false
  }

  return true
}

export function isAuthenticated() {
  const token = getToken()

  if (!token) {
    return false
  }

  return isValidToken(token)
}

export default {
  saveToken,
  getToken,
  removeToken,
  isValidToken,
  isAuthenticated
}
