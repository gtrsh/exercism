'use strict';

const express = require('express');
const emails = require('../fixtures/emails');
const jsonBodyParser = require('../middlewares/json_body_parser');
const generateId = require('../utils/gen-id');

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

emailsRouter.route('/')
    .get(getEmailsRoute)
    .post(jsonBodyParser, createEmailRoute);

emailsRouter.route('/:id')
    .get(getEmailRoute)
    .patch(jsonBodyParser, updateEmailRoute)
    .delete(deleteEmailRoute);

module.exports = emailsRouter;
