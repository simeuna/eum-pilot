import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Realtime from './views/Realtime.vue'
import Analysis from './views/Analysis.vue'

import BootstrapVue from 'bootstrap-vue'

import HighchartsVue from 'highcharts-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(HighchartsVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/realtime',
      name: 'realtime',
      component: Realtime
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: Analysis
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
