import { fetchApi } from './services.js';
import { randomMaker } from './utils.js';
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next');
let questionNumber = 1;
let dataResults = await fetchApi('easy');
console.log(dataResults);
if (dataResults.error) {
  document.getElementById('container').innerHTML = `<p>${dataResults.error}</p>`;
}
let randomizedAnswers = randomMaker(dataResults);
nextButton.addEventListener('click', () => {
  questionNumber++;
  showQuestion();
});
showQuestion();

function showQuestion() {
  if (!dataResults?.length) {
    showLoading();
  } else {
    hideLoading();
    if (questionNumber < dataResults?.length) {
      questionContainer.innerHTML = randomizedAnswers[questionNumber].question;
      const answers = [...randomizedAnswers[questionNumber].answers];
      answersContainer.innerHTML = '';
      answers.forEach((answer) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = answer;
        li.appendChild(button);
        answersContainer.appendChild(li);
      });
    } else {
      document.getElementById('container').innerHTML = '<p>Quiz completed!</p>';
    }
  }
}

function showLoading() {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('box-container').style.display = 'none';
}
function hideLoading() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('box-container').style.display = 'block';
}
