'use strict'

const { createReadStream } = require('fs')
const { argv, stdout } = process

createReadStream(argv[2]).pipe(stdout)
