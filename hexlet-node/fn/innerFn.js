/*
run('');       // null
run('cb');     // null
run('power');  // rewo
run('hexlet'); // telx
 */

const run = (text) => {
    const takeLast = (str, n) => {
        if (str.length < n || str.length === 0) {
            return null;
        }

        return str.slice(str.length - n, str.length).split('').reverse().join('');
    };

    return takeLast(text, 4);
};

export default run;
