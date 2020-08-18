const express = require('express');

const users = require('./fixtures/users');
const emails = require('./fixtures/emails');

const app = express();

app.use((req, res) => {
    const route = req.method + ' ' + req.url;

    if (route === 'GET /users') {
        res.send(users);
    } else if (route === 'GET /emails') {
        res.send(emails);
    } else {
        res.end(`You asked for ${route}`);
    }
});

app.listen(8090);
