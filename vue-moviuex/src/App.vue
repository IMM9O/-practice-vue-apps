<template>
  <div id="app">
    <button @click="getPopular">Add Movie</button>
    <div class="cards">
          <Movie-cell class="card" v-for="item in $store.state.movies" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MovieCell from './components/movie-cell'
export default {
  components: {
    MovieCell
  },
  methods: mapActions([
    'addMovie',
    'getPopular'
  ])
}
</script>

<style>

.card {
  margin: 5px;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}

.card {
  margin: 10px;
}

</style>

