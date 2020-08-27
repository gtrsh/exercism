'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const emails = require('../fixtures/emails');
const generateId = require('../utils/gen-id');
const requireAuth = require('../middlewares/require-auth');

const emailsRouter = express.Router();

const getEmailsRoute = (req, res) => res.send(emails);
const getEmailRoute = (req, res) => res.send(emails.find(email => email.id === req.params.id));
const createEmailRoute = async (req, res) => {
    const newEmail = {...req.body, id: generateId()};
    emails.push(newEmail);

    res.status(201);
    res.send(newEmail);
};
const updateEmailRoute = async (req, res) => {
    const email = emails.find(email => email.id === req.params.id);
    Object.assign(email, req.body);

    res.status(200);
    res.send(email);
};
const deleteEmailRoute = (req, res) => {
    const index = emails.findIndex(email => email.id === req.params.id);
    emails.splice(index, 1);

    res.sendStatus(204);
};

emailsRouter.use(requireAuth);
emailsRouter.route('/')
    .get(getEmailsRoute)
    .post(bodyParser.json(), createEmailRoute);

emailsRouter.route('/:id')
    .get(getEmailRoute)
    .patch(bodyParser.json(), updateEmailRoute)
    .delete(deleteEmailRoute);

module.exports = emailsRouter;
