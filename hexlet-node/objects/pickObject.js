/*
pick(data, ['user']); // { user: 'ubuntu' }
pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
pick(data, []); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется
pick(data, ['none', 'cores']); // { cores: 4 }
 */

const pick = (obj, xs) => (
    xs.reduce(
        (acc, val) => (Object.keys(obj).includes(val) ? { ...acc, ...{ [val]: obj[val] } } : acc),
        {},
    )
);

export default pick;
