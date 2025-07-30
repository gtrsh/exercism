import Fastify from 'fastify'

import createApp from './index.js'
import createLogger from './logger.js'
import config from './config.js'

const fastify = Fastify({
  loggerInstance: createLogger(config),
})

const app = await createApp(fastify, config)

await app.listen({ port: 3000 })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
