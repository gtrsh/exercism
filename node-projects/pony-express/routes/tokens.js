'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const findUser = require('../utils/find-user');

const signature = 'l33t';
const createToken = (user) => jwt.sign({ userId: user.id }, signature, { expiresIn: '7d' });

const createTokenRoute = (req, res) => {
    const credentials = req.body;
    const user = findUser(credentials);

    if (user) {
        const token = createToken(user);
        res.status(201);
        res.send(token);
    } else {
        res.sendStatus(422);
    }
};

const tokenRouter = express.Router();

tokenRouter.post('/', bodyParser.json(), createTokenRoute);

module.exports = tokenRouter;
