'use strict'

const sequenceSum = (begin, end) => {
    if (begin > end) {
        return NaN;
    }

    if (begin === end) {
        return begin;
    } else {
        return end + sequenceSum(begin, end -1)
    }

};

module.exports = sequenceSum;
