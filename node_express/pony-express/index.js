'use strict';

const express = require('express');

const users = require('./fixtures/users');
const emails = require('./fixtures/emails');

const app = express();
const router = express.Router();

const getUsersRoute = (req, res) => res.send(users);
const getUserRoute = (req, res) => res.send(users.find(user => user.id === req.params.id));
const getEmailsRoute = (req, res) => res.send(emails);
const getEmailRoute = (req, res) => res.send(emails.find(email => email.id === req.params.id));

router.get('/users', getUsersRoute);
router.get('/users/:id', getUserRoute);
router.get('/emails', getEmailsRoute);
router.get('/emails/:id', getEmailRoute);

app.use(router);
app.listen(8090);
