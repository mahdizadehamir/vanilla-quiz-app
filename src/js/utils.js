export function randomMaker(arr = []) {
  const newArr = arr.map((item) => {
    const answers = [item.correct_answer, ...item.incorrect_answers];
    answers.forEach((value, index) => {
      const randomIndex = getRandomIndex();
      answers[index] = answers[randomIndex];
      answers[randomIndex] = value;
    });
    item.answers = answers;
    return item;
  });
  return newArr;
}

function getRandomIndex() {
  const randomNum = Math.floor(Math.random() * 4);
  return randomNum;
}
