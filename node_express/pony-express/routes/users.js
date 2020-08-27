'use strict';

const express = require('express');
const requireAuth = require('../middlewares/require-auth');
const users = require('../fixtures/users');

const usersRouter = express.Router();

const getUsersRoute = (req, res) => res.send(users);
const getUserRoute = (req, res) => res.send(users.find(user => user.id === req.params.id));

usersRouter.use(requireAuth);
usersRouter.get('/', getUsersRoute);
usersRouter.get('/:id', getUserRoute);

module.exports = usersRouter;
