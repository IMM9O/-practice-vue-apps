<template>
  <div id="app">
    <button @click="getPopular">Add Movie</button>
    <div class="container-fluid">
      <div class="row">
          <Movie-cell class="col-xs-12 col-sm-6 col-md-3 col-lg-2 card" v-for="item in $store.state.movies" :key="item.id" :item="item" />
      </div>
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


</style>

