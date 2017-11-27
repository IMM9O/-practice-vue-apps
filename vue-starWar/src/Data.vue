<template>
  <div class="title">     
    <div class="container-fluid" v-if="title === 'people'">
      <div class="row">
        <div class="col col-md-4"
             v-for="(item, index) in characters"
             v-bind:key="index">
           <Character v-bind:id="item" class="char-card"></Character>
        </div>
      </div>
    </div>  
  </div>  
</template>

<script>
import Character from './Character.vue'

export default {
  components: {
     Character
  },
  data() {
    return {
      title: this.$route.params.type,
      characters: [5, 6, 1]
    };
  },
  watch: {
    $route: 'change'
  },
  methods: {
    change() {
      this.title = this.$route.params.type;
    }
  }
};
</script>

<style>

</style>
