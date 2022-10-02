import Vue from 'nativescript-vue'
import App from './App'
import store from './assets/js/store'
import Navigator from 'nativescript-vue-navigator'
import { routes } from './assets/js/routes'

Vue.prototype.$store = store
Vue.use(Navigator, { routes })

new Vue({
  render: h => h(App),
}).$start()
