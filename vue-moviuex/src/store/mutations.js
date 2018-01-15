import * as types from './mutation-types'

export const mutations = {
    [types.ADD_MOVIE] (state, payload){
        if(payload.id) {
            payload.poster_path = `https://image.tmdb.org/t/p/w500${payload.poster_path}`
            state.movies.push(payload)    
        } else if(payload.results) {
            payload.results.forEach(element => {
                element.poster_path = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
                state.movies.push(element);
            });
        }

    }
}