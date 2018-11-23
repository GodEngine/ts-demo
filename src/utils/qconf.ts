import qconf from 'node-qconf'
import { ConfigItem } from 'config'
import { IsLocal, Configs, QconfMap } from '../config'

/**
 * 获取qconf配置信息
 * 如果获取不到qconf的配置信息 则还是从js文件里读取
 * @param  {String} name 配置的key名
 * @return {Object}      一个配置信息的json对象
 */
export default (name: string): ConfigItem => {
  // 这里会取到一个qconf的路径
  const path = QconfMap[name]
  const config: any = Configs[name]
  // 本地直接返回local.js的配置信息
  if (IsLocal) {
    return {
      ...config,
      key: name,
    }
  } else {
    // 获取所有的host 返回一个Array
    const hostList = qconf.getAllHost(path)
    // 如果可以从qconf中获取到信息
    if (hostList && hostList.length) {
      console.log(`成功获取到qconf：${path} qconf ip 为： ${hostList}`)
      // 返回替换host后的qconf
      return {
        ...config,
        host: hostList,
        key: name,
      }
      // return Object.assign(configs[name], { host: host })
    } else {
      if (!IsLocal) {
        console.log(`没有获取到qconf：${path}`)
      }
      // 为防止qconf获取不到数据 当出现这种情况时 配置还是从 env下边的三个js文件中获取
      return {
        ...config,
        key: name,
      }
    }
  }
}
