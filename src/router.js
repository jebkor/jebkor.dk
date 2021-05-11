import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from './components/pages/Frontpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage,
    },
  ],
})
