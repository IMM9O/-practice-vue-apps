<template>
  <div @click="onClick">
   <p><strong>name</strong>: {{ details.name }}</p>
   <p><strong>hair color</strong>: {{ details.hair_color }}</p>
   <p><strong>skin color</strong>: {{ details.skin_color }}</p>
   <p><strong>height</strong>: {{ details.height }}</p>
   <p><strong>mass</strong>: {{ details.mass }}</p>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  namr: 'Character',
  props: ['id'],
  data() {
    return {
      title: 'Character',
      details: {}
    };
  },
  mounted: function(){
       this.getCharacterDetails(this.id);
  },
  methods: {
    getCharacterDetails(id) {
      axios
        .get(`https://swapi.co/api/people/${id}`)
        .then(response => this.details = response.data)
        .catch(error => console.log(error));
    },
    onClick(){
      this.getCharacterDetails(this.getRandomArbitrary(1,55));
    },
    getRandomArbitrary(min, max) {
       return Math.round(Math.random() * (max - min)) + min;
    }
  }
};
</script>
