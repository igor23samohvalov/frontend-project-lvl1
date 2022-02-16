import readlineSync from 'readline-sync';

const randomNumber = (max) => Math.floor(Math.random() * max);
const randomExpression = () => ['+', '-', '*'][randomNumber(3)];

function greetUser(task) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log(task);

  return name;
}

function getAnswer(correctAnswer) {
  const answer = readlineSync.question('Your answer: ', {
    trueValue: [correctAnswer],
  });
  return answer;
}

function endGame(name) {
  console.log(`Congratulations, ${name}!`);
}

export default {
  randomNumber, greetUser, endGame, getAnswer, randomExpression,
};
