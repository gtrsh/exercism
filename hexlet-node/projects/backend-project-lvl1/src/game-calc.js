import _ from 'lodash'
import readlineSync from 'readline-sync'
import { wrongAnswer, gameFail, gameSuccess, QUIZ_ITEMS_COUNT } from './commons.js'

const operationsList = ['+', '-', '*']
const operationsLIstMap = {
  '+': _.add,
  '-': _.subtract,
  '*': _.multiply
}

const genItem = () => ({
  operand1: _.random(100),
  operand2: _.random(100),
  operator: _.sample(operationsList)
})

const getQuizData = () => _.range(QUIZ_ITEMS_COUNT).map(() => genItem())
const isAnswerRight = (num, answer) => num === answer

const gameCalc = (name) => {
  console.log('What is the result of the expression?')
  const quizData = getQuizData()
  let isGameFailed

  for (const { operand1, operand2, operator } of quizData) {
    const questExpression = `${operand1} ${operator} ${operand2}`
    const operation = operationsLIstMap[operator]
    const result = operation(operand1, operand2)

    console.log(`Question: ${questExpression}`)
    const answer = readlineSync.question('Your answer: ')

    if (isAnswerRight(result, Number(answer))) {
      console.log('Correct!')
      isGameFailed = false
    } else {
      wrongAnswer(answer, result)
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

export default gameCalc
