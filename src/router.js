import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/typeface',
      name: 'typeface',
      component: () => import(/* webpackChunkName: "typeface" */ './views/Typeface.vue'),
    },
    {
      path: '/interview',
      name: 'interview',
      component: () => import(/* webpackChunkName: "interview" */ './views/Interview.vue')
    },
    {
      path: '/how-to-play',
      name: 'how-to-play',
      component: () => import(/* webpackChunkName: "interactive" */ './views/HowToPlay.vue')
    },
    {
      path: '/interactive',
      name: 'interactive',
      component: () => import(/* webpackChunkName: "interactive" */ './views/Interactive.vue')
    }
  ]
})
