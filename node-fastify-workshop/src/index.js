const createApp = async (app) => {
  app.register(import('./routes/users.js'), { prefix: '/users' })

  return app
}

export default createApp
