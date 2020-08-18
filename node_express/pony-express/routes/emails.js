'use strict';

const express = require('express');
const emails = require('../fixtures/emails');
const readBody = require('../utils/read-body');
const generateId = require('../utils/gen-id');

const emailsRouter = express.Router();

const getEmailsRoute = (req, res) => res.send(emails);
const getEmailRoute = (req, res) => res.send(emails.find(email => email.id === req.params.id));
const createEmailRoute = async (req, res) => {
    const body = await readBody(req);
    const newEmail = {...JSON.parse(body), id: generateId()};
    emails.push(newEmail);

    res.status(201);
    res.send(newEmail);
};

emailsRouter.get('/', getEmailsRoute);
emailsRouter.get('/:id', getEmailRoute);
emailsRouter.post('/', createEmailRoute);

module.exports = emailsRouter;
