import Vue from 'vue'
import App from './App/App.vue'
import { router } from './app/app.router';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
