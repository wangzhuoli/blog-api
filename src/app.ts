import Koa from 'koa'
import http from 'http'
import https from 'https'
import router from './router/index'
import { httpPort, httpsPort } from './config'

const app = new Koa()

app.on('error', (error) => {
  console.log('error', error)
})

// 使用koa-router
app.use(router)

// http 服务
http.createServer(app.callback()).listen(httpPort)

// https 服务
https.createServer(app.callback()).listen(httpsPort)
