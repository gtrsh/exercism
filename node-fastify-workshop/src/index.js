const createApp = async (app, config) => {
  app.register(import('@fastify/jwt'), { secret: config.JWT_SECRET })
  app.register(import('./routes/users.js'), { prefix: '/users' })
  app.register(import('./routes/login.js'), { prefix: '/login' })

  return app
}

export default createApp
