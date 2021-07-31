/*
LODASH VERSION:
export default (...xs) => {
  if (xs.length === 0) {
    return null;
  }

  return _.sum(xs) / xs.length;
};
*/

const sum = (xs) => xs.reduce((acc, val) => acc + val, 0);
export default (...xs) => {
    if (xs.length === 0) {
        return null;
    }

    return sum(xs) / xs.length;
};
