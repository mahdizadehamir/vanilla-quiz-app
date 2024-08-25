const highScoresContainer = document.querySelector('.highScorers');
let topScorers = JSON.parse(localStorage.getItem('topScorers')) || null;
show();
function show() {
  console.log(highScoresContainer);
  if (topScorers === null) {
    let alertMessage = document.createElement('p');
    alertMessage.innerHTML = 'no data';
    alertMessage.id = 'alert';
    highScoresContainer.appendChild(alertMessage);
  } else {
    topScorers.map((scorer) => {
      const scorerContainer = document.createElement('div');
      scorerContainer.innerHTML = `<p>${scorer.name} - ${scorer.score}</p>`;
      scorerContainer.id = 'scorer';
      highScoresContainer.appendChild(scorerContainer);
      //   const nameContainer = document.createElement('p');
      //   const scoreContainer = document.createElement('span');
      //   nameContainer.innerHTML = scorer.name;
      //   scoreContainer.innerHTML = scorer.score;
      //   highScoresContainer.appendChild(nameContainer);
      //   highScoresContainer.appendChild(scoreContainer);
    });
  }
}
