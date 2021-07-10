'use strict'

const smallestDivisor = (num) => {
    if (num < 1) {
        return NaN;
    }

    if (num === 1) return 1;

    let divisor = 2;

    while (num >= divisor) {
        if (num % divisor === 0) {
            return divisor;
        }

        divisor++
    }

    return divisor;

};

module.exports = smallestDivisor;
