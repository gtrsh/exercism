'use strict';

const express = require('express');
const users = require('../fixtures/users');

const usersRouter = express.Router();

const getUsersRoute = (req, res) => res.send(users);
const getUserRoute = (req, res) => res.send(users.find(user => user.id === req.params.id));

usersRouter.get('/', getUsersRoute);
usersRouter.get('/:id', getUserRoute);

module.exports = usersRouter;
