import Fastify from 'fastify'

import createApp from './index.js'
import createLogger from './logger.js'

const fastify = Fastify({
  loggerInstance: createLogger(),
})

const app = await createApp(fastify)

await app.listen({ port: 3000 })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
