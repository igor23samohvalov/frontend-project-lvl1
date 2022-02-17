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

const name = main.greetUser('Find the greatest common divisor of given numbers.');

main.playGame('brain-gcd', correctAnswer, name);

main.endGame(name);
