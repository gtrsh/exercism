import _ from 'lodash'
import readlineSync from 'readline-sync'

const QUIZ_ITEMS_COUNT = 3

const getQuizData = () => _.range(QUIZ_ITEMS_COUNT).map(() => _.random(100))
const isAnswerRight = (num, answer) => (num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')

const gameEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  const quizData = getQuizData()
  let isGameFailed

  for (const num of quizData) {
    console.log(`Question: ${num}`)
    const answer = readlineSync.question('Your answer: ')

    if (isAnswerRight(num, answer)) {
      console.log('Correct!')
    } else {
      const correctAnswer = num % 2 === 0 ? 'yes' : 'no'
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      isGameFailed = true
      break
    }
  }

  if (isGameFailed) {
    console.log(`Let's try again, ${name}!`)
  } else {
    console.log(`Congratulations, ${name}!`)
  }
}

export default gameEven
