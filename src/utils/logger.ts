import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import winston from 'winston'
import 'winston-daily-rotate-file'
import { Logger } from 'logger'
import { logPath, IsLocal } from '../config'

if (!fs.existsSync(logPath)) {
  mkdirp.sync(logPath)
}

let colors: any = null
if (IsLocal) {
  // 本地环境的一些特殊处理
  /* eslint-disable-next-line */
  colors = require('colors')
}

export default (app: string): Logger => {
  const accessLog = new winston.Logger({
    transports: [
      new winston.transports.DailyRotateFile({
        filename: path.resolve(logPath, `./${app}.access.log`),
        datePattern: `yyyy-MM-dd.`,
        prepend: true,
        level: 'info',
      }),
    ],
  })
  const errorLog = new winston.Logger({
    transports: [
      new winston.transports.DailyRotateFile({
        filename: path.resolve(logPath, `./${app}.error.log`),
        datePattern: `yyyy-MM-dd.`,
        prepend: true,
        level: 'error',
      }),
    ],
  })

  const logger: Logger = {
    access(accessObj) {
      // console.log('=>>', self)
      const { context, data } = accessObj
      const obj = context ? {
        href: context.request.href,
        header: context.request.header,
        ip: context.request.ip,
      } : {}

      const results = JSON.stringify(Object.assign({}, data, obj))

      // 添加本地环境的colors输出
      if (IsLocal) {
        console.log(colors.green(results))
      }
      accessLog.info(results)
    },
    error(errorObj) {
      const { context, error, data } = errorObj
      const req = context ? {
        href: context.request.href,
        header: context.request.header,
        ip: context.request.ip,
      } : {}
      const errors = error ? {
        err_msg: error.message,
        err_name: error.name,
        err_stack: error.stack,
      } : {}
      const results = JSON.stringify(Object.assign({}, data, req, errors))

      // 添加本地环境的colors输出
      errorLog.error(results)
      if (IsLocal) {
        console.error(colors.red(results))
      }
    },
  }

  return logger
}
