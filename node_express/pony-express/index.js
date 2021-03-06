'use strict';

const path = require('path');
const express = require('express');

const usersRouter = require('./routes/users');
const emailsRouter = require('./routes/emails');
const tokenRouter = require('./routes/tokens');

const logger = require('./middlewares/logger');
const basicAuth = require('./middlewares/basic-auth');
const findUser = require('./utils/find-user');
const compress = require('compression');
const serveStatic = require('serve-static');

const app = express();

app.use(logger);
app.use(compress());
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(basicAuth(findUser));
app.use('/users', usersRouter);
app.use('/emails', emailsRouter);
app.use('/tokens', tokenRouter);
app.listen(8090);
