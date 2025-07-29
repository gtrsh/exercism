export default async (fastify, opts) => {
  fastify.route({
    method: 'GET',
    url: '/version',
    constraints: { version: '1.0.0' },
    handler: async (req, reply) => {
      req.log.info('version request')

      return 'data'
    }
  })
}
