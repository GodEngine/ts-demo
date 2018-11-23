import { Context } from 'koa'
import {
  Ctx,
  Body,
  Post,
  JsonController,
} from 'routing-controllers'

import {
  logger as getLogger,
} from '../../utils'

const logger = getLogger('user')

@JsonController('/prepath')
export default class {
  @Post('/path')
  async router(
    @Ctx() ctx: Context,
    @Body() yzinfo: any,
  ) {
    try {
      return {
        code: 0,
        msg: 'success',
      }
    } catch (e) {
      logger.error({
        data: {
          logtype: '',
        },
        context: ctx,
        error: e,
      })
      return {
        code: 500,
        message: '服务器错误',
      }
    }
  }
}
