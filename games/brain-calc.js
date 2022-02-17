#!/usr/bin/env node
import main from '../src/index.js';

const correctAnswer = ([num1, expr, num2]) => {
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

const name = main.greetUser('What is the result of the expression?');

main.playGame('brain-calc', correctAnswer, name);

main.endGame(name);
