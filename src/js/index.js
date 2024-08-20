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
  showAlertWindow();
  localStorage.setItem('difficultyRange', JSON.stringify(difficultyRange));
}

function showAlertWindow() {
  const alertWindow = document.getElementById('alertWindow');
  alertWindow.style.display = 'block';
  setTimeout(function () {
    alertWindow.style.display = 'none';
  }, 500);
}
