'use strict'

const fs = require('fs')
const { Transform } = require('stream')
const { stdin, stdout } = process

const { isFileAvailable } = require('./utils')

const buildTransformStream = (fn) => new Transform({
    transform(chunk, encoding, next) {
        next(null, fn(chunk.toString()))
    }
})

const buildFileInputStream = (fileName, fn) => {
    if (isFileAvailable(fileName)) {
        return fs.createReadStream(fileName, {flags: 'a+', encoding: 'UTF-8'})
    } else {
        return fn()
    }
}

const buildFileOutputStream = (fileName, fn) => {
    if (isFileAvailable(fileName)) {
        return fs.createWriteStream(fileName, {flags: 'a+', encoding: 'UTF-8'})
    } else {
        return fn()
    }
}

module.exports = {
    stdin,
    stdout,
    buildTransformStream,
    buildFileInputStream,
    buildFileOutputStream
}
