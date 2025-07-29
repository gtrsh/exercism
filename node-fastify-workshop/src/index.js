const createApp = async (app) => {
  app.register(import('./routes/users.js'), { prefix: '/users' })
  app.register(import('./routes/login.js'), { prefix: '/login' })
  app.register(import('./routes/version.js'))

  return app
}

export default createApp
