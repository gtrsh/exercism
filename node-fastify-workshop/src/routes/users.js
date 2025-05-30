const users = [{id: 1, name: 'John'}, {id: 2, name: 'Alice'}]

const usersPlugin = async (fastify, opts) => {
    fastify.get('/', async (req, reply) => ({ data: users }))
}

export default usersPlugin
