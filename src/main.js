import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
