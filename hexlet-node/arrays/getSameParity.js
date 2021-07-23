export default (xs) => {
    const evenPredicate = (n) => n % 2 === 0;
    const oddPredicate = (n) => n % 2 !== 0;

    const resultArr = [];
    const isEven = xs[0] % 2 === 0;
    const predicate = isEven ? evenPredicate : oddPredicate;

    for (const item of xs) {
        if (predicate(item)) {
            resultArr.push(item);
        }
    }

    return resultArr;
};
