'use strict';

const express = require('express');

const usersRouter = require('./routes/users');
const emailsRouter = require('./routes/emails');
const logger = require('./middlewares/logger');

const app = express();

app.use(logger);
app.use('/users', usersRouter);
app.use('/emails', emailsRouter);
app.listen(8090);
