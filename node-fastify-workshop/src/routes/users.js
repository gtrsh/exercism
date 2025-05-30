export default async (fastify, opts) => {
  fastify.get('/', async (req, reply) => [
    {username: 'john-doe'},
    {username: 'eva-lu-ator'},
  ])
}
