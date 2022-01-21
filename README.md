# 博客后台服务

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)]()

koa2 + mysql + typescript

## 安装

```
yarn install
```

## 启动

```
yarn start
```

## package.json

```
"srcripts": {
  "start": "nodemon --watch src/ -e ts --exec ts-node -r tsconfig-paths/register ./src/app.ts --files"
}
```

- nodemon 监听 src/下的任意 ts 文件改变时 ts-node 重新编译./src/app.ts 文件
- tsconfig-paths/register 让 ts 文件支持 alias 路径引入

## /src/config.ts

全局配置文件
