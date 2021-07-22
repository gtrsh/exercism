export const swap = (xs) => {
    if (xs.length < 2) {
        return xs;
    }

    const first = xs[0];

    xs[0] = xs[xs.length - 1];
    xs[xs.length - 1] = first;

    return xs;
};
