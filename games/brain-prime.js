#!/usr/bin/env node
import main from '../src/index.js';

const correctAnswer = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const name = main.greetUser('Answer "yes" if given number is prime. Otherwise answer "no".');

main.playGame('brain-prime', correctAnswer, name);
