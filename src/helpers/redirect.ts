import * as Koa from 'koa'

const redirect = (app: Koa) => {
  app.use((ctx) => {
    ctx.redirect('/')
  })
}

export default redirect
