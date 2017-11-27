// first import Vue and VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

// second tell vue to use vueRouter
Vue.use(VueRouter)

// map your router with components
import Data from './components/Data'
const routes = [
  { path: '/data/:type', component: Data  }
]

// export new VueRouter instance 
export const router = new VueRouter({routes})
