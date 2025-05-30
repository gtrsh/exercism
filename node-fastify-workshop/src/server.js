import Fastify from 'fastify'

const fastify = Fastify()

fastify.get('/', async () => ({ hello: 'world' }))

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
