const inputField = document.getElementById('name-input');
const submitBtn = document.getElementById('submit');
const modal = document.querySelector('.modal');
submitBtn.addEventListener('click', () => {
  checkUserName();
});
function checkUserName() {
  const inputValue = inputField.value;
  if (inputValue) {
    const name = inputValue.trim();
    sessionStorage.setItem('userName', name);
    window.location.href = '/src/templates/game.html';
    return inputValue;
  } else {
    console.log(modal);
    const alertMessage = document.createElement('p');
    alertMessage.innerHTML = 'Input Field is Empty ';
    alertMessage.style.color = 'red';
    alertMessage.style.textAlign = 'center';
    modal.appendChild(alertMessage);
    return null;
  }
}
