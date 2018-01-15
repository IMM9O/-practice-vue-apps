<template>
  <div id="app">
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
    'getPopular'
  ]),
  created() {
    this.getPopular();
  }
}
</script>

<style>

.card {
  margin: 15px;
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

