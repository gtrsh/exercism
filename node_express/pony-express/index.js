'use strict';

const express = require('express');

const users = require('./fixtures/users');
const emails = require('./fixtures/emails');

const app = express();
const usersRouter = express.Router();
const emailsRouter = express.Router();

const getUsersRoute = (req, res) => res.send(users);
const getUserRoute = (req, res) => res.send(users.find(user => user.id === req.params.id));
const getEmailsRoute = (req, res) => res.send(emails);
const getEmailRoute = (req, res) => res.send(emails.find(email => email.id === req.params.id));

usersRouter.get('/', getUsersRoute);
usersRouter.get('/:id', getUserRoute);
emailsRouter.get('/', getEmailsRoute);
emailsRouter.get('/:id', getEmailRoute);

app.use('/users', usersRouter);
app.use('/emails', emailsRouter);
app.listen(8090);
