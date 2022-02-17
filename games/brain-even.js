#!/usr/bin/env node
import main from '../src/index.js';

const correctAnswer = (num) => {
  const [number] = num;

  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const name = main.greetUser('Answer "yes" if the number is even, otherwise answer "no".');

main.playGame('brain-even', correctAnswer, name);
