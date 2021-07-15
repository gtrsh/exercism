'use strict'

const numToDigits = (num) => String(num).split('')
    .map(i => Number(i))
    .reduce((acc, val) => acc + val)

const addDigits = (num) => (String(num).length === 1) ? num : addDigits(numToDigits(num))

module.exports = addDigits
