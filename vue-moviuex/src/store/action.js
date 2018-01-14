import * as types from "./mutation-types"

const API_KEY = '';

export const addMovie = ({ commit }) => {
  fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`,
    { method: "GET" }
  )
    .then(res => res.json())
    .then(json => commit(types.ADD_MOVIE, [json]));
};
