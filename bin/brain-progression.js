#!/usr/bin/env node
import main from '../src/index.js';

const correctAnswer = (array) => {
  const i = array.indexOf('..');
  let step;
  if (i >= 2) {
    step = array[1] - array[0];
  } else {
    step = array[i + 2] - array[i + 1];
  }

  return array[i + 1] - step;
};

let correctAnswers = 0;
const name = main.greetUser('What number is missing in the progression?');

while (correctAnswers < 3) {
  const curValues = main.randomArray();

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
