'use strict'

const { Transform } = require('stream')
const { stdin, stdout} = process
const split2 = require('split2')

const linesTransformStream = () => {
    let currentLine = 0

    return new Transform({
        transform(chunk, encoding, next) {
            currentLine % 2 === 0 ?
                this.push(chunk.toString().toLowerCase() + '\n') :
                this.push(chunk.toString().toUpperCase() + '\n')

            currentLine++
            next()
        }
    })
}

stdin.pipe(split2()).pipe(linesTransformStream()).pipe(stdout)
