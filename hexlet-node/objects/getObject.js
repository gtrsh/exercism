/*
get(data, ['undefined']); // null
get(data, ['user']); // 'ubuntu'
get(data, ['user', 'ubuntu']); // null
get(data, ['hosts', 1, 'name']); // 'web2'
get(data, ['hosts', 0]); // { name: 'web1' }
get(data, ['hosts', 1, null]); // 3
get(data, ['hosts', 1, 'active']); // false
 */

const get = (obj, xs) => {
    let result = obj;

    for (const field of xs) {
        if (!Object.prototype.hasOwnProperty.call(result, field)) {
            return null;
        }
        result = result[field];
    }
    return result;
};

export default get;
