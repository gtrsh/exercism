'use strict'

const { Writable } = require('stream')
const { stdin } = process

const argWriterStream = new Writable({
    write(chunk, encoding, next) {
        console.log(`writing: ${chunk.toString()}`)
        next()
    }
})

stdin.pipe(argWriterStream)
