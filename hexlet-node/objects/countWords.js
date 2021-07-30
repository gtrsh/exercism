/*
const text1 = 'one two three two ONE one wow';
countWords(text1);
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
countWords(text2);
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }
 */

import words from 'lodash/words';

const getCountWordsObj = (xs) => {
    const result = {};
    for (const word of xs) {
        result[word] = (result[word] ?? 0) + 1;
    }

    return result;
};

export default (str) => getCountWordsObj(words(str).map((i) => i.toLowerCase()));
