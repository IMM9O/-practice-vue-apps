import * as types from './mutation-types'

export const mutations = {
    [types.ADD_MOVIE] (state, payload){
        state.movies.push(...payload)    
    }
}