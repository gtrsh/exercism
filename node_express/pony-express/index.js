const express = require('express');

const users = require('./fixtures/users');
const emails = require('./fixtures/emails');

const app = express();

const getUsersRoute = (req, res) => res.send(users);
const getEmailsRoute = (req, res) => res.send(emails);

app.use((req, res) => {
    const route = req.method + ' ' + req.url;

    if (route === 'GET /users') {
        getUsersRoute(req, res);
    } else if (route === 'GET /emails') {
        getEmailsRoute(req, res);
    } else {
        res.end(`You asked for ${route}`);
    }
});

app.listen(8090);
