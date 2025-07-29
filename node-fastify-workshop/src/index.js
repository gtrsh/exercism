const createApp = async (app) => {
  app.register(import('./routes/users.js'), { prefix: '/users' })
  app.register(import('./routes/login.js'), { prefix: '/login' })

  return app
}

export default createApp
