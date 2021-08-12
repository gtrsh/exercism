import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
};

export default greetings;
