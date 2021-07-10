'use strict'

const factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    const iter = (counter, acc) => {
        if (counter === 1) {
            return acc;
        }
        return iter(counter - 1, counter * acc);
    };

    return iter(n, 1);
};

const smallestDivisor = (num) => {
    if (num === 1) {
        return 1;
    }

    const iter = (counter, acc) => {
        if (acc === counter) {
            return counter;
        }

        if (counter % acc === 0) {
            return acc;
        }

        return iter(counter, acc + 1)

    };

    return iter(num, 2);
};

// SOLUTION
/*
  // BEGIN
  // Visualize Execution: https://goo.gl/Mc68MA
  const iter = (acc) => {
    // We use 'num / 2' in the condition below, and not 'num'.
    // This is a simple optimization: a number cannot be divided
    // by a number larger than its half.
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };

  return iter(2);
 */

module.exports = {
    smallestDivisor,
    factorial
}
