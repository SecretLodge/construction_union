import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import * as serve from 'koa-static'
import { Server } from 'http'
import { bootstrapControllers } from 'amala'
import { resolve } from 'path'
import env from '@/helpers/env'
import redirect from '@/helpers/redirect'
import routes from '@/helpers/routes'

const app = new Koa()

export default async function () {
  const staticPathDir = resolve(__dirname, '../public')
  const router = new Router()
  await bootstrapControllers({
    app,
    router,
    basePath: '/',
    disableVersioning: true,
    controllers: [],
  })
  app.use(serve(staticPathDir))
  app.use(cors({ origin: '*' }))
  app.use(bodyParser())
  app.use(router.routes())
  app.use(router.allowedMethods())
  void redirect(app)
  void routes(router)
  return new Promise<Server>((resolve, reject) => {
    const connection = app
      .listen(env.PORT, 'localhost')
      .on('listening', () => {
        console.log(`HTTP is listening on ${env.PORT}`)
        resolve(connection)
      })
      .on('error', reject)
  })
}
