import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.array().items(
      S.object().prop('username', S.string()).required()
    )
  }
}

export default async (fastify, opts) => {
  fastify.get('/', { schema }, async (req, reply) => {
    req.log.info('get users request')

    return [
      { username: 'john-doe' },
      { username: 'eva-lu-ator' },
      // { otherfld: 'eva-lu-ator' },
    ]
  })
}
