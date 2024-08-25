import { fetchApi } from './services.js';
import { randomMaker } from './utils.js';
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next');
let userName = sessionStorage.getItem('userName');
let score = 0;
let questionNumber = 1;
let topScorers = JSON.parse(localStorage.getItem('topScorers')) || [];
let dataResults = async () => {
  try {
    const difficultyRange = JSON.parse(localStorage.getItem('difficultyRange'));
    const data = await fetchApi(difficultyRange);
    return data;
  } catch (error) {
    return { error: error.message };
  }
};
let results = await dataResults();
console.log(results);
if (results.error) {
  document.getElementById('container').innerHTML = `<p>${results.error}</p>`;
}
let randomizedAnswers = randomMaker(results || []);

nextButton.addEventListener('click', () => {
  questionNumber++;
  showQuestion();
});
showQuestion();

function showQuestion() {
  if (!results?.length) {
    showLoading();
  } else {
    hideLoading();
    if (questionNumber < results?.length) {
      questionContainer.innerHTML = randomizedAnswers[questionNumber].question;
      const answers = [...randomizedAnswers[questionNumber].answers];
      answersContainer.innerHTML = '';
      answers.forEach((answer) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.id = 'answerButton';
        const correctAnswer = randomizedAnswers[questionNumber].correct_answer;
        const userAnswer = answer;
        button.addEventListener('click', () => {
          checkAnswer(userAnswer, correctAnswer, button);
          showCorrectAnswer(correctAnswer);
        });
        button.innerText = answer;

        li.appendChild(button);
        answersContainer.appendChild(li);
      });
    } else {
      document.getElementById(
        'container'
      ).innerHTML = `<h3>Quiz completed!</h3> <br><p>Your Score :${score}</p> <br><a class="back" href="/index.html">Back To Home</a>`;
      addScore();
    }
  }
}

function addScore() {
  const scorer = {
    name: userName,
    score: score,
  };
  topScorers.push(scorer);
  localStorage.setItem('topScorers', JSON.stringify(topScorers));
}

function showLoading() {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('box-container').style.display = 'none';
}
function hideLoading() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('box-container').style.display = 'block';
}

function checkAnswer(answer, correct_answer, button) {
  if (answer === correct_answer) {
    button.style.backgroundColor = 'green';
    score++;
  } else {
    button.style.backgroundColor = 'red';
  }
}

function showCorrectAnswer(correct_answer) {
  const allButtons = document.querySelectorAll('#answerButton');
  for (let button of allButtons) {
    if (button.innerText === correct_answer) {
      button.style.backgroundColor = 'green';
    }
  }
}
