<template>
  <div id="app">
    <h1 class="title">What is popular today ?</h1>
    <div class="cards">
        <Movie-cell class="card" v-for="(item, index ) in $store.state.movies" :key="item.id" :item="item" :index="index" />
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

#app .title{
  text-align: center;
}

</style>

