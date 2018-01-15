import * as types from "./mutation-types";

const API_KEY = "";
const POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const getRandomMovie = ({ commit }) => {
  let randomKey = Math.floor(Math.random() * 1000) + 1;
  fetch(`https://api.themoviedb.org/3/movie/${randomKey}?api_key=${API_KEY}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(json => commit(types.ADD_MOVIE, json));
};

export const getPopular = ({ commit }) => {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    {
      method: "GET"
    }
  )
    .then(res => res.json())
    .then(json => commit(types.ADD_MOVIE, json));
};

export const removeMovie = ({commit}, index) => {
  console.log(index);
  commit(types.REMOVE_MOVIE, index);
}
