#!/usr/bin/env node
import main from '../src/index.js';

const correctAnswer = (nums) => {
  let [smallerNum, biggerNum] = nums.sort((a, b) => a - b);

  while (biggerNum % smallerNum !== 0) {
    const currentSmallNum = biggerNum % smallerNum;

    biggerNum = smallerNum;
    smallerNum = currentSmallNum;
  }

  return smallerNum;
};

let correctAnswers = 0;
const name = main.greetUser('Find the greatest common divisor of given numbers.');

while (correctAnswers < 3) {
  const curValues = [
    main.randomNumber(100),
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
