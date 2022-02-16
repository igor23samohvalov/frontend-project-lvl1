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

// function competeAnswers(userAnswer, correctAnswer, name, correctAnswers) {
//   if (userAnswer === correctAnswer) {
//     console.log('Correct!');
//     correctAnswers += 1;
//   } else {
//     console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
//     console.log(`Let's try again, ${name}!`);
//   }
// }

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
