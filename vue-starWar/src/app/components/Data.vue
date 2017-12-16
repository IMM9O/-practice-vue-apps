<template>
  <div class="title">     
    <div class="container-fluid" v-if="title === 'people'">
      <div class="row">
        <div class="col col-md-4"
             v-for="(item, index) in items.people"
             v-bind:key="index"
              @click="onClick(index)"
         >
           <Character :item="item" class="char-card"></Character>
        </div>
      </div>
    </div>  

    <div class="container-fluid" v-else-if="title === 'planets'">
      <div class="row">
        <div class="col col-md-4"
             v-for="(item, index) in items.planets"
             v-bind:key="index"
              @click="onClick(index)"
         >
           <Planets :item="item" class="char-card"></Planets>
        </div>
      </div>
    </div> 

    <div class="container-fluid" v-else-if="title === 'vehicles'">
      <div class="row">
        <div class="col col-md-4"
             v-for="(item, index) in items.vehicles"
             v-bind:key="index"
              @click="onClick(index)"
         >
           <Vehicles :item="item" class="char-card"></Vehicles>
        </div>
      </div>
    </div>   
  </div>  
</template>

<script>
import axios from 'axios' 
import Character from './Character'
import Planets from './Planets'
import Vehicles from './Vehicles'

export default {
  components: {
     Character,
     Planets,
     Vehicles
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
      this.title = this.$route.params.type;
      if(this.items[this.title].length === 0) {
          init.forEach(element => this.getItemsDetails(element));
      }
    },
    getItemsDetails(id) {
      axios
        .get(`https://swapi.co/api/${this.title}/${id}`)
        .then(res => this.items[this.title].push(res.data))
        .catch(err => console.log(err));
    },
    onClick(index) {
        axios.get(`https://swapi.co/api/${this.title}/${this.getRandomArbitrary(1,63)}`)
             .then(res => this.items[this.title].splice(index, 1, res.data))
             .catch(err => console.log(err));
    },
    getRandomArbitrary(min, max) {
       return Math.floor(Math.random() * (max - min)) + min;
    }

  },
  created() {
    this.items = {
      'people' : [],
      'planets': [],
      'vehicles': []
    };
    this.change();
  }
};
</script>

<style>

</style>
