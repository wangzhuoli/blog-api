import Router from 'koa-router'
import admin from '@/router/admin'

const router = new Router()

// 后台系统路由
router.use('/admin', admin)

export default router.routes()
