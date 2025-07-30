import S from 'fluent-json-schema'

const schema = {
  body: S.object()
    .prop('username', S.string()).required()
    .prop('password', S.string()).required(),
}

export default async (fastify, opts) => {
  fastify.post('/', { schema },  async (req, reply) => {
    const { username } = req.body

    return { username }
  })
}
