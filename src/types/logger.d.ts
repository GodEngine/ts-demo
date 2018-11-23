import { Context } from 'koa'

export type Logger = {
  access(accessObj: {context?: Context, data?: Object}): void
  error(errorObj: {context?: Context, error?: Error, data?: Object}): void
}
