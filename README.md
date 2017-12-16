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
``` bash
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

## Using Global Fillter

* Create js file and export function with one pramter at least ( this function will be the fillter function )
* To use Fillter as global import it on `main.js` file
```javascript
Vue.filter('filterName', filterFunction)
```

---


