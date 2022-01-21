import KoaRouter from 'koa-router'
import account from '@/router/admin/account'

const router = new KoaRouter()

// 用户路由
router.use('/account', account)

export default router.routes()
