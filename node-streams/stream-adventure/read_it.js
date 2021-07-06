'use strict'

const { Readable } = require('stream')
const { argv, stdout } = process

const argReaderStream = new Readable({
    read(size) {
    }
})

argReaderStream.push(argv[2])
argReaderStream.pipe(stdout)
