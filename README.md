# vue-apps

---

This repo contain 3 projects

## vue-kepp

### Installation and run

```
// no installation required just use simple live server
```

### What i learned

* Use Vue instance
* Use methods
* Use computed property
* Use Condational & list render
* Bind data, styles and events to view

## vue-starWar

### Installation and run

```bash
# this project build using vue-cli

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### What i learned

* Using component based architecture
* Using component lifecycle hooks
* Using component props data
* Using one-way data flow
* Using Presentational and Container Components
* Using Router and passing data
* Add Global Fillter
* Add Simple managing state


## vue-moviuex

### Installation and run

```bash
# this project build using vue-cli

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### What i learned

* Using vuex librairy for managing state
* Using component lifecycle hooks
* Using component props data
* Using one-way data flow
* Using Presentational and Container Components

---

## setup router with ease

* Create `app.router.js` file on the app root folder
* First import Vue and VueRouter
* Second use this functions to enable vue router for application `Vue.use(VueRouter)`
* Map your router string to component

```javascript
import Data from "./components/Data";
const routes = [{ path: "/data/:type", component: Data }];
```

* Create VueRouter instance with routes config then export it

```javascript
export const router = new VueRouter({ routes });
```

* Import VueRouter instance and use it inside Vue instance

```javascript
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
```

---

## setup vuex with ease

* Create `store/index.js` file on the app root folder
* First import Vue and Vuex
* Second use this functions to enable vuex for application `Vue.use(Vuex)`
* Add Your intial state 
* Create another file `mutations.js` to contain all oprations on the state this is the only place allowed to mutate your state.
* Create another file called `actions.js` contains all actions we can call from components.
* From component if you want to use or call any actions
```javasctipt
import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'removeMovie'
  ])
}
```
* Export new instance from `Vuex.Store({})` and the object contains state, mutations and actions 

---

## Using Global Fillter

* Create js file and export function with one pramter at least ( this function will be the fillter function )
* To use Fillter as global import it on `main.js` file

```javascript
Vue.filter("filterName", filterFunction);
```

---
