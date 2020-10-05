'use strict'

const fs = require('fs')

const isFileAvailable = (fileName) => {
    try {
        if (fs.statSync(fileName)) {
            return true
        }
    } catch (err) {
        return false
    }
}

module.exports = {
    isFileAvailable
}
