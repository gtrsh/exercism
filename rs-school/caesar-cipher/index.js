'use strict'

const yargs = require('yargs')

const buildCaesarCodec = require('./cipher')
const {
    stdin,
    stdout,
    buildTransformStream,
    buildFileInputStream,
    buildFileOutputStream
} = require('./streams')

const { shift, action, input, output } = yargs
    .option('s', {
        alias: 'shift',
        type: 'number'
    })
    .option('a', {
        alias: 'action',
        type: 'string'
    })
    .option('i', {
        alias: 'input',
        type: 'string'
    })
    .option('o', {
        alias: 'output',
        type: 'string'
    }).argv

const ioStreams = {
    input: null,
    output: null
}

if (!shift) {
    process.stderr.write('shift argument must be provided')
    process.exit(1)
}

if (!action) {
    process.stderr.write('action argument must be provided')
    process.exit(1)
}

if (!input) {
    ioStreams.input = stdin
} else if (input) {
    ioStreams.input = buildFileInputStream(input)
}

if (!output) {
    ioStreams.output = stdout
} else if (output) {
    ioStreams.output = buildFileOutputStream(output)
}

const { input: inputStream, output: outputStream } = ioStreams

const cipherCodec = buildCaesarCodec(shift, action)
const transformStream = buildTransformStream(cipherCodec)

inputStream.pipe(transformStream).pipe(outputStream)
