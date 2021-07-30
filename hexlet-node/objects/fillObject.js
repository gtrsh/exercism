/*
const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }
 */

/*
LODASH VERSION:
export default (object, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(object, filteredData);
};
 */

const merge = (acceptor, xs, donor) => {
    for (const field of xs) {
        Object.assign(acceptor, { [field]: donor[field] });
    }
};

export default (acceptor, xs, donor) => {
    if (xs.length === 0) {
        Object.assign(acceptor, donor);
    } else {
        merge(acceptor, xs, donor);
    }
};
