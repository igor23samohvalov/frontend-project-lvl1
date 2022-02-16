import readlineSync from 'readline-sync';

const randomNumber = (max) => Math.floor(Math.random() * max);
const randomExpression = () => ['+', '-', '*'][randomNumber(3)];
const randomArray = () => {
  const result = [];
  const step = randomNumber(20);

  for (let i = 0; i < randomNumber(5) + 5; i += 1) {
    if (result.length === 0) {
      result.push(randomNumber(20));
    } else {
      result.push(result[i - 1] + step);
    }
  }
  result[randomNumber(result.length - 1)] = '..';

  return result;
};

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
  randomNumber, greetUser, endGame, getAnswer, randomExpression, randomArray,
};
