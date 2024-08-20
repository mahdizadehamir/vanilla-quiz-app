let difficultyRange = 'medium';
const topScorers = [];

const difficultyButtons = document.querySelectorAll('.difficulty-button');
difficultyButtons.forEach((button, key) => {
  button.addEventListener('click', () => {
    difficultySelector(button);
  });
});

function difficultySelector(button) {
  difficultyRange = button.dataset.value;
  localStorage.setItem('difficultyRange', JSON.stringify(difficultyRange));
}
