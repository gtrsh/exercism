'use strict'

const finalGrade = (e, p) => {
    if (e > 90 || p > 10) {
        return 100;
    }

    if (e > 75 && p >= 5) {
        return 90;
    }

    if (e > 50 && p >= 2) {
        return 75;
    }

    return 0;
}

module.exports = finalGrade;
