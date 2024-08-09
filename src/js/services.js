export const fetchApi = async (difficulty) => {
  const apiURL = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`;
  try {
    const data = await fetch(apiURL).then((res) => res.json());
    return data.results;
  } catch (error) {
    console.log(error)
  }
};
