/*
convert();
// []

convert([1993, 3, 24]);
// ['Sat Apr 24 1993']

convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']
 */

const convert = (xs) => xs.map((i) => {
    const date = new Date(...i);
    return date.toDateString();
});

export default (...xs) => {
    if (xs.length === 0) {
        return [];
    }

    return convert(xs);
};
