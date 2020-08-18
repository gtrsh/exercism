'use strict';

const express = require('express');

const users = require('./fixtures/users');
const emails = require('./fixtures/emails');

const app = express();
const router = express.Router();

const getUsersRoute = (req, res) => res.send(users);
const getEmailsRoute = (req, res) => res.send(emails);

router.get('/users', getUsersRoute);
router.get('/emails', getEmailsRoute);

app.use(router);
app.listen(8090);
