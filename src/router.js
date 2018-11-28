import Vue from 'vue'
import Router from 'vue-router'
import Hem from './views/Hem.vue'
import OmOss from './views/OmOss.vue'
import Butik from './views/Butik.vue'
import Kundvagn from './views/Kundvagn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hem
    },
    {
      path: '/OmOss',
      name: 'info',
      component: OmOss
    },
    {
      path: '/Butik',
      name: 'Shop',
      component: Butik
    },
    
    {
      path: '/Kundvagnn',
      name: 'Cart',
      component: Kundvagn
    },
  ]
})
