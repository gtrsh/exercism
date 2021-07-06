'use strict'

const { Readable } = require('stream')
const { stdout } = process

const arrDataProvider = (xs) => {
    return new Readable({
        read(size) {
            xs.length === 0 ?
                this.push(null) :
                this.push((xs.shift()))
        }
    })
}

arrDataProvider(['a', 'b', 'c', 'xot', 'aedon', '\n']).pipe(stdout)
