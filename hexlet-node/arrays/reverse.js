export const reverse = (xs) => {
    for (let i = 0, j = xs.length - 1; i < j; i++, j--) {
        [xs[i], xs[j]] = [xs[j], xs[i]];
    }
};
