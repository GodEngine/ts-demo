import 'reflect-metadata'
import mkdirp from 'mkdirp'
import fs from 'fs'
import path from 'path'
import { createKoaServer } from 'routing-controllers'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
// import { MysqlConfig } from 'config'
// import { initModel, qconf } from './utils'
// import { distPath, logPath, Configs } from './config'
import { distPath, logPath } from './config'

if (!fs.existsSync(logPath)) {
  mkdirp.sync(logPath)
}

const app = createKoaServer({
  controllers: [path.join(__dirname, '/controllers/**/*{.js,.ts}')],
})

app.use(serve(distPath))
app.use(bodyParser())

// for (const key in Configs) {
//   const item = Configs[key] as MysqlConfig

//   if (item.modelPath) {
//     initModel(qconf(key) as MysqlConfig)
//   }
// }
// 加载所有的实体

export default app
