/**
 * 命令行色彩化,供测试环境和本地开发使用，线上自动禁止console
 * 只提供两个参数，第一个为string，第二个为任意值
 *
 * case：
 *    consoleWrapper.error('error message')
 *    consoleWrapper.info('info message', data)
 *    consoleWrapper.data('info message', data)
 */

// const colors = require('colors')

import colors from 'colors'

const isPro = process.env.NODE_ENV === 'production'

colors.setTheme({
  info: 'green',
  data: 'white',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
})

type ColorType = 'info' | 'data' | 'warn' | 'debug' | 'error'

const getter = (type: ColorType) => (str: string, data: any) => {
  if (isPro) return
  switch (type) {
    case 'error':
      console.log(colors.error(str), data || '')
    break
    case 'info':
      console.log(colors.info(str), data || '')
    break
    case 'data':
      console.log(colors.data(str), data || '')
    break
    default:
    console.log(str, data || '')
  }
}

const consoleWrapper = {
  error: getter('error'),
  info: getter('info'),
  data: getter('data'),
}

module.exports = consoleWrapper