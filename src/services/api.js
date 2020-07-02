import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const apiKey = "efe85b88a773abd3e8dd0247f3e5c6f2";

export const searchFilms = async () => {
  const result = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
  // console.log(result);
  return result.data;
};

export const searchFilmByName = async (searchQuery) => {
  const result = await axios.get(
    `/search/movie?api_key=${apiKey}&query=${searchQuery}`
  );
  // console.log(result);
  return result.data;
};

export const getInfoAboutFilm = (id) => {
  return axios(`/movie/${id}?api_key=${apiKey}`).then(
    (response) => response.data
  );
};

export const getActors = (id) => {
  return axios(`/movie/${id}/credits?api_key=${apiKey}`).then(
    (response) => response.data
  );
};

export const getReviews = (id) => {
  return axios(`/movie/${id}/reviews?api_key=${apiKey}`).then(
    (response) => response.data
  );
};
