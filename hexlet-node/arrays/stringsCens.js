/*
const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!
 */

const makeCensored = (delimiter = ' ', cens = '$#%!') => (
    (str, xs) => str.split(delimiter).map((i) => (xs.includes(i) ? cens : i)).join(delimiter)
);

export default makeCensored();
