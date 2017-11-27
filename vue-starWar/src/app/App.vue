<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <h4>
      <router-link to="/data/people" class="link">Meet tHe characters</router-link> | 
      <router-link to="/data/planets" class="link">Exploar Planets</router-link>
    </h4>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'StarWar App'
    };
  }
};
</script>

<style>
body {
  background: #2c3e50;
}

#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}

.char-card {
  border: 2px solid #f1c40f;
  border-radius: 4px;
  cursor: pointer;
}

.link,
.link:visited,
.link:active,
.link:hover {
   color: #27ae60;
}
.link:active,
.link:visited {
  text-decoration-color: #f1c40f;
}

</style>
