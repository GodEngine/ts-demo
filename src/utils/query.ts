import axios from 'axios'
import { queryArg } from 'yzinfo'
/**
 * @param {*} option
 */
export default function query (options: queryArg): Promise<any> {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30 * 1000, // 30秒超时
    })

    instance(options)
      .then(response => {
        resolve(response)
      }).catch(error => {
        console.log(`接口异常：${error}`)
        reject(error)
      })
  })
}