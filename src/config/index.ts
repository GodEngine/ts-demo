import { ConfigMap } from 'config'
import { Configs as pro } from './backend/production'
import { Configs as dev } from './backend/development'
import { Configs as local } from './backend/local'
import { IsPro, IsDev, IsLocal } from './env'

export * from './env'
export * from './server'
export * from './qconf'

let con: ConfigMap

switch (true) {
  case IsPro:
    con = pro
    break
  case IsDev:
    con = dev
    break
  case IsLocal:
  default:
    con = local
}

export const Configs = con

// export { configs }
