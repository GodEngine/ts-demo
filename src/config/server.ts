import path from 'path'
import { IsLocal, IsDev } from './env'

export const app = 'medicine-web'
export const port = IsDev ? 6666 : 8000
export const logPath = IsLocal ? './logs/' : `/data/logs/${app}/`
export const distPath = path.resolve(__dirname, '../dist')
