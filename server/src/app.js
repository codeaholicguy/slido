import Koa from 'koa'
import http from 'http'
import Router from 'koa-66'
import cors from 'koa-cors'
import morgan from 'koa-morgan'
import serve from 'koa-static'
import moment from 'moment'
import path from 'path'
import HttpStatusCodes from 'http-status-codes'

import merge from 'lodash/merge'

import {PORT, ENV} from './config'
import {requireDir} from './services/fs'

const defaultConfig = {
  port: PORT,
  logger: ENV === 'development' ? 'dev' : 'combined',
  cors: {
    origin: true,
    credentials: true,
    maxAge: moment.duration(1, 'months').asMilliseconds(),
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  },
  controller: {
    creators: requireDir(path.join(__dirname, './controllers'), ['base.js']),
    prefix: ''
  },
  static: path.join(__dirname, './static')
}

export default class App {
  constructor(config) {
    this._app = new Koa()
    this._app.config = merge(defaultConfig, config)
    this._configure(this._app)
    this._httpServer = http.createServer(this._app.callback())
  }

  listen() {
    const {port} = this._app.config

    this._httpServer.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })
  }

  server() {
    return this._httpServer
  }

  //
  // Private methods
  //
  _initRoutes(config) {
    const router = new Router()
    const controllers = config.creators.map(Controller => new Controller())

    for (const controller of controllers) {
      router.mount(config.prefix, controller.router)
    }

    return router.routes()
  }

  _configure(app) {
    app.use(morgan(app.config.logger))
    app.use(cors(app.config.cors))
    app.use(serve(app.config.static))

    const routes = this._initRoutes(app.config.controller)
    app.use(routes)

    app.use(async (ctx, next) => {
      try {
        next()
      } catch (err) {
        ctx.status = HttpStatusCodes.INTERNAL_SERVER_ERROR
        ctx.body = 'Something went wrong'
      }
    })
  }
}
