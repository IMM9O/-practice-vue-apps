import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    movies: []
}

export default new Vuex.Store({
    state
})
