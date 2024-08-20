export const fetchApi = async (difficulty) => {
  const apiURL = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`;
  try {
    console.log(difficulty)
    const data = await fetch(apiURL).then((res) => res.json());
    return data.results;
  } catch (error) {
    throw error;
  }
};
