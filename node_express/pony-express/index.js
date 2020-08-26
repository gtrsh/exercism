'use strict';

const path = require('path');
const express = require('express');

const usersRouter = require('./routes/users');
const emailsRouter = require('./routes/emails');
const logger = require('./middlewares/logger');
const basicAuth = require('./middlewares/basic-auth');
const compress = require('compression');
const serveStatic = require('serve-static');

const app = express();

app.use(logger);
app.use(compress());
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(basicAuth);
app.use('/users', usersRouter);
app.use('/emails', emailsRouter);
app.listen(8090);
