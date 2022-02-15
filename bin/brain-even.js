#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

function correctAnswer(num) {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
}

const randomNumber = (max) => Math.floor(Math.random() * max);

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswers = 0;
let answer;
let currentNumber;

while (correctAnswers < 3) {
  currentNumber = randomNumber(100);
  console.log(`Question: ${currentNumber}`);
  answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer(currentNumber)) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct asnwer was ${correctAnswer(currentNumber)}`);
  }
}

console.log(`Congratulations, ${name}!`);
