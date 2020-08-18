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
const updateEmailRoute = async (req, res) => {
    const body = await readBody(req);
    const email = emails.find(email => email.id === req.params.id);
    Object.assign(email, JSON.parse(body));

    res.status(200);
    res.send(email);
};
const deleteEmailRoute = (req, res) => {
    const index = emails.findIndex(email => email.id === req.params.id);
    emails.splice(index, 1);

    res.sendStatus(204);
};

emailsRouter.get('/', getEmailsRoute);
emailsRouter.get('/:id', getEmailRoute);
emailsRouter.post('/', createEmailRoute);
emailsRouter.patch('/:id', updateEmailRoute);
emailsRouter.delete('/:id', deleteEmailRoute);

module.exports = emailsRouter;
