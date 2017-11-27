<template>
  <div class="title">     
    <div class="container-fluid" v-if="title === 'people'">
      <div class="row">
        <div class="col col-md-4"
             v-for="(item, index) in items"
             v-bind:key="index"
              @click="onClick(index)"
         >
           <Character :item="item" class="char-card"></Character>
        </div>
      </div>
    </div>  
  </div>  
</template>

<script>
import axios from 'axios' 
import Character from './Character.vue'

export default {
  components: {
     Character
  },
  data() {
    return {
      title: this.$route.params.type,
      items: []
    };
  },
  watch: {
    $route: 'change'
  },
  methods: {
    change() {
      const init = [1,13,14];
      this.title = this.$route.params.type
      if(!this.items.length) {
          this.items = [];
          init.forEach(element => this.getItemsDetails(element));
      }
    },
    getItemsDetails(id) {
      axios
        .get(`https://swapi.co/api/${this.title}/${id}`)
        .then(res => this.items.push(res.data))
        .catch(err => console.log(err));
    },
    onClick(index) {
        axios.get(`https://swapi.co/api/${this.title}/${this.getRandomArbitrary(1,63)}`)
             .then(res => this.items.splice(index, 1, res.data))
             .catch(err => console.log(err));
    },
    getRandomArbitrary(min, max) {
       return Math.floor(Math.random() * (max - min)) + min;
    }

  },
  created() {
        this.change();
  }
};
</script>

<style>

</style>
