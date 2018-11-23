import { KoaMiddlewareInterface } from 'routing-controllers'
import { Context } from 'koa'
// import { logger as getLogger } from '../utils'

// const logger = getLogger('report-order')

export class CreateReportOrderMiddleware implements KoaMiddlewareInterface {
  async use(ctx: Context, next: Function) {
    await next()
  }
}
