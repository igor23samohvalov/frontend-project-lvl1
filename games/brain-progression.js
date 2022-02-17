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

const name = main.greetUser('What number is missing in the progression?');

main.playGame('brain-progression', correctAnswer, name);
