/*
const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true
 */

import isObject from 'lodash/isObject';

const deepClone = (obj) => {
    const result = {};
    const entries = Object.entries(obj);

    for (const [key, val] of entries) {
        result[key] = isObject(val) ? deepClone(obj[key]) : val;
    }

    return result;
};

export default deepClone;
