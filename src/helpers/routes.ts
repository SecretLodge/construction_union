import * as Router from 'koa-router'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const routes = (router: Router) => {
  router.get('/', (ctx) => {
    ctx.body = readFileSync(resolve(__dirname, '../public/index.html'), 'utf-8')
  })
}

export default routes
