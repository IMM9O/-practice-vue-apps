import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './action'

Vue.use(Vuex)

const state = {
    movies: []
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
