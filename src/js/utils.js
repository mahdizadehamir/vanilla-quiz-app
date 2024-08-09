export function randomMaker(arr = []) {
  const newArr = arr.map((item) => {
    const answers = [item.correct_answer, ...item.incorrect_answers];
    item.answers = answers;
    return item;
  });
  return newArr;
}
