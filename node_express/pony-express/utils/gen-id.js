'use strict';

const crypto = require('crypto');
const genId = () => crypto.randomBytes(8).toString('hex');

module.exports = genId;
