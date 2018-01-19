import * as types from './mutation-types'

export const mutations = {
    [types.ADD_MOVIE] (state, payload){
        if(payload.id) {
            payload.poster_path = `https://image.tmdb.org/t/p/w500${payload.poster_path}`
            if(checkIfExist(state.movies, payload.id)) state.movies.push(payload)    
        } else if(payload.results) {
            payload.results.forEach(element => {
                element.poster_path = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
                 if(checkIfExist(state.movies, element.id)) state.movies.push(element);
            });
        }

    },
    [types.REMOVE_MOVIE] (state, payload) {
        state.movies.splice(payload, 1)
    }

}


function checkIfExist(state, id){
    return !state.filter(item => item.id === id).length;
}