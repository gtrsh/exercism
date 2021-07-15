'use strict'

const firstLetterStrToUpper = (word) => word ? word[0].toUpperCase() + word.slice(1, word.length) : word;
const wordsToUpper = (str) => str.split(' ').map(i => firstLetterStrToUpper(i)).join(' ');

module.exports = wordsToUpper;
