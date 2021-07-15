'use strict'

const bigLettersCount = (str) => str.split('')
    .map(i => i === i.toUpperCase())
    .filter(i => i === true)
    .length

const compare = (first, second) => {
    const firstCount = bigLettersCount(first)
    const secondCount = bigLettersCount(second)

    if (firstCount > secondCount) {
        return 1
    }
    if (firstCount < secondCount) {
        return -1
    }
    return 0
};

const greaterThan = (first, second) => (
    compare(first, second) === 1)

const lessThan = (first, second) => (
    compare(first, second) === -1)

const isEqual = (first, second) => (
    compare(first, second) === 0)

module.exports = {
    greaterThan,
    lessThan,
    isEqual
}
