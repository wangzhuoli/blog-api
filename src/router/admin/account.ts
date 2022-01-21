import Router from 'koa-router'
const router = new Router()

router.post('/login', (ctx) => {
  ctx.body = { code: 1, msg: '', data: {} }
})

export default router.routes()
