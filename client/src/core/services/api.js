import axios from 'axios'

import {API_URL} from '../../config'

export async function send({
  path,
  method = 'get',
  headers = {},
  token,
  data,
  params
}) {
  const requestObject = {
    url: `${API_URL}/${path}`,
    method,
    headers,
    data,
    params
  }

  if (token) {
    requestObject.headers = {
      ...headers,
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios(requestObject)

  return response
}

export default {
  send
}
