import { fetchApi } from './services.js';
import {  randomMaker } from './utils.js';
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next');
let questionNumber = 1;
let dataResults = async () => {
  try {
    const data = await fetchApi('easy');
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
        button.innerText = answer;
        li.appendChild(button);
        answersContainer.appendChild(li);
      });
    } else {
      document.getElementById('container').innerHTML =
        '<h3>Quiz completed!</h3> <br> <a class="back" href="/index.html">Back To Home</a>';
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
