import _ from 'lodash'
import readlineSync from 'readline-sync'
import { wrongAnswer, gameFail, gameSuccess, QUIZ_ITEMS_COUNT } from './commons.js'

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
      isGameFailed = false
    } else {
      const correctAnswer = num % 2 === 0 ? 'yes' : 'no'
      wrongAnswer(answer, correctAnswer)
      isGameFailed = true
      break
    }
  }

  if (isGameFailed) {
    gameFail(name)
  } else {
    gameSuccess(name)
  }
}

export default gameEven
