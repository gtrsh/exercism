export default async (fastify, opts) => {
  fastify.get('/', async (req, reply) => {
    req.log.info('get users request')

    return [
      {username: 'john-doe'},
      {username: 'eva-lu-ator'},
    ]
  })
}
