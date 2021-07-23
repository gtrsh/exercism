export default (xs) => {
    if (xs.length === 0) {
        return null;
    }

    let arrSum = 0;

    for (const temp of xs) {
        arrSum += temp;
    }

    return arrSum / xs.length;
};
