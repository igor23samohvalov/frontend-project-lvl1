#!/usr/bin/env node
import main from '../src/index.js';

const correctAnswer = ({ num1, num2, expr }) => {
  let result;

  switch (expr) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }
  return result;
};

let correctAnswers = 0;
const name = main.greetUser('What is the result of the expression?');

while (correctAnswers < 3) {
  const curValues = {
    num1: main.randomNumber(10),
    expr: main.randomExpression(),
    num2: main.randomNumber(10),
  };

  console.log(`Question: ${curValues.num1} ${curValues.expr} ${curValues.num2}`);
  const answer = main.getAnswer(correctAnswer(curValues));

  if (answer === true) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer(curValues)}`);
    console.log(`Let's try again, ${name}!`);
  }
}

main.endGame(name);
