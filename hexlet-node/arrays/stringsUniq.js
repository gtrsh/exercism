/*
const text1 = 'yyab'; // y, a, b
countUniqChars(text1); // 3

const text2 = 'You know nothing Jon Snow';
countUniqChars(text2); // 13

// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
countUniqChars(text3); // 0
 */

const uniqChars = (xs) => xs.reduce((acc, val) => (acc.includes(val) ? [...acc] : [...acc, val]), []);

export default (str) => {
    const uniqCharsArr = uniqChars(str.split(''));
    return uniqCharsArr.length;
};
