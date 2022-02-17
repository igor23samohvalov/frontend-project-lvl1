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

const valuesForGame = (gameName) => {
  let values;

  switch (gameName) {
    case 'brain-even':
      values = [randomNumber(100)];
      break;
    case 'brain-calc':
      values = [
        randomNumber(10),
        randomExpression(),
        randomNumber(10),
      ];
      break;
    case 'brain-gcd':
      values = [
        randomNumber(100) + 1,
        randomNumber(100) + 1,
      ];
      break;
    case 'brain-progression':
      values = randomArray();
      break;
    case 'brain-prime':
      values = [randomNumber(100)];
      break;
    default:
  }

  return values;
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

function playGame(gameName, correctAnswer, name) {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const currentValues = valuesForGame(gameName);

    console.log(`Question: ${currentValues.join(' ')}`);
    const answer = getAnswer(correctAnswer(currentValues));

    if (answer === true) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer(currentValues)}`);
      console.log(`Let's try again, ${name}!`);
    }
  }
}

function endGame(name) {
  console.log(`Congratulations, ${name}!`);
}

export default {
  randomNumber,
  greetUser,
  endGame,
  getAnswer,
  randomExpression,
  randomArray,
  playGame,
};
