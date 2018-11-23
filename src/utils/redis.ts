/**
 * redis connector
 */

import redis from 'redis'
import thenifyAll, { RedisThunk } from 'thenify-all'
import { RedisConfig } from 'config'
import random from './random'

const redisList: { [key: string]: RedisThunk } = {}

export default (configs: RedisConfig) => {
  // 如果已经存在该数据库对应的链接，直接返回即可
  if (redisList[configs.key]) return redisList[configs.key]

  const redisServers = configs.host

  // 去除端口号
  const [redisServer] = redisServers[random(0, redisServers.length - 1)].split(
    ':'
  )
  const redisClient = redis.createClient(6379, redisServer)

  const redisCo = thenifyAll(
    redisClient,
    redisClient,
    [
      'del',
      'exists',
      'expire',
      'get',
      'getrange',
      'hget',
      'hgetall',
      'hmget',
      'hmset',
      'hdel',
      'hset',
      'hmset',
      'incrby',
      'rename',
      'sadd',
      'scard',
      'set',
      'sismember',
      'smembers',
      'zadd',
      'zcard',
      'zrange',
      'zrem',
      'zrevrange',
      'zscore',
      'zremrangebyrank',
      'hincrby',
    ]
  )

  redisList[configs.key] = redisCo

  return redisCo
}
