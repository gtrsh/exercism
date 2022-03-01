'use strict';

const users = require('../fixtures/users');

const findUserByCredentials = ({ username, password }) =>
    users.find(user => user.username === username && user.password === password)

module.exports = findUserByCredentials;
