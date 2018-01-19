<template>
  <div id="app">
    <h1 class="title">What is popular today ?</h1>
    <div class="genres">
      <label v-for="genre in genres" :key="genre.value" class="checkbox-inline">
        <input type="checkbox" :value="genre.value" v-model="checkedGenres">&nbsp; {{ genre.text }}
      </label>
    </div>
    <div class="cards">
        <Movie-cell class="card" 
                    v-for="(item, index ) in $store.state.movies" 
                    :key="item.id" 
                    :item="item" 
                    :index="index" 
                   v-if="checkedGenres.some(v=> item.genre_ids.indexOf(v) !== -1)"  />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MovieCell from "./components/movie-cell";
export default {
  data() {
    return {
      genres: [
        { text: "Drama", value: 28 },
        { text: "Action", value: 12 },
        { text: "Horro", value: 35 }
      ],
      checkedGenres: [12]
    };
  },
  components: {
    MovieCell
  },
  methods: mapActions(["getPopular"]),
  created() {
    this.getPopular();
  }
};
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

.title {
  text-align: center;
}

.genres {
  text-align: center;
  margin: 10px auto;
}
</style>
