#!/usr/bin/env node
import main from '../src/index.js';

const correctAnswer = (num) => {
  if ((num !== 2 && num % 2 === 0) || num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

let correctAnswers = 0;
const name = main.greetUser('Answer "yes" if given number is prime. Otherwise answer "no".');

while (correctAnswers < 3) {
  const curValues = [
    main.randomNumber(100),
  ];

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
