#!/usr/bin/env node
import main from '../src/index.js';

const correctAnswer = (...num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

let correctAnswers = 0;
const name = main.greetUser('Answer "yes" if the number is even, otherwise answer "no".');

while (correctAnswers < 3) {
  const curValues = [main.randomNumber(100)];

  console.log(`Question: ${curValues.join(' ')}`);
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
