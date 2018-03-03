import convert from 'koa-convert'
import bodyParser from 'koa-bodyparser'

export default (...args) => {
  return convert(bodyParser(...args))
}
