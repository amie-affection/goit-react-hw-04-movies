import axios from "axios";

axios.defaults.baseURL = "https://www.developers.themoviedb.org/";
const apiKey = "efe85b88a773abd3e8dd0247f3e5c6f2";

export const searchFilms = async (trending) => {
  console.log(trending);
  const result = await axios.get("/3/trending/get-trending");
  return result.data;
};

export const getFilms = async (title) => {
  const result = await axios.get("/3/movies/get-movie-reviews");
  return result.data;
};
