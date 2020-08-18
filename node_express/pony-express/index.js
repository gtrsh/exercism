const express = require('express');

const users = require('./fixtures/users');
const emails = require('./fixtures/emails');

const app = express();

const getUsersRoute = (req, res) => res.send(users);
const getEmailsRoute = (req, res) => res.send(emails);
const noRouteFound = (req, res) => res.end(`You asked for ${req.url}`);

const routes = {
    'GET /users': getUsersRoute,
    'GET /emails': getEmailsRoute,
};

app.use((req, res) => {
    const route = req.method + ' ' + req.url;
    const handler = routes[route];

    handler ? handler(req, res) : noRouteFound(req, res);
});

app.listen(8090);
