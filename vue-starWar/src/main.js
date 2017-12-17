import Vue from "vue"
import App from "./App/App.vue"
import { router } from "./app/app.router"
import countNumber from "./app/shared/CountNumber"

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

Vue.filter('countNumber', countNumber)