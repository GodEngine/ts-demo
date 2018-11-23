const env = process.env.NODE_ENV
export const IsPro = env === 'production'
export const IsDev = env === 'development'
export const IsLocal = env === 'local' || env === 'local_dev'
