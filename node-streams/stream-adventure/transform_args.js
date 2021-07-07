'use strict'

const { Transform } = require('stream')
const { stdin, stdout} = process

const argTransformStream = new Transform({
    transform(chunk, encoding, next) {
        next(null, chunk.toString().toUpperCase())
    }
})

stdin.pipe(argTransformStream).pipe(stdout)
