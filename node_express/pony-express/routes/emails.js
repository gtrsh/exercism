'use strict';

const express = require('express');
const emails = require('../fixtures/emails');

const emailsRouter = express.Router();

const getEmailsRoute = (req, res) => res.send(emails);
const getEmailRoute = (req, res) => res.send(emails.find(email => email.id === req.params.id));

emailsRouter.get('/', getEmailsRoute);
emailsRouter.get('/:id', getEmailRoute);

module.exports = emailsRouter;
