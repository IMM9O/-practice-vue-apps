<template>

  <div class="movie-card">
      <img :src="item.poster_path" class="poster cover" height="300" alt="Placeholder image">
      <button class="close" @click="removeMovie(index)"></button>
      <div class="caption">
        <h3>{{ item.title }}</h3>
        <p class="desc">{{ item.overview }}</p>
      </div>
   </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MovieCell',
  props: ['item', 'index'],
  methods: mapActions([
    'removeMovie'
  ])
}
</script>

<style>
.close {
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
  background: #e67e22;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

.movie-card {
  background: #000;
  color: rgba(255, 255, 255, 0.85);
  position: relative;
  width: 500px;
  border-radius: 5px;
  box-shadow: 6px 4px 8px 0 rgba(0, 0, 0, 0.3), -6px 4px 8px 0 rgba(0, 0, 0, 0.3);
  height: 250px;
}

.movie-card .poster {
  position: absolute;
  width: 150px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  left: 0;
  filter: grayscale(80%);
}

.movie-card .caption {
  left: 150px;
  padding: 15px;
  position: absolute;
}

.caption .title {

}
.caption .desc {

}

.cover {
  height: 100%;
  object-fit: cover;
}
</style>

