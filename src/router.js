import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ListClient from './views/ListClient.vue'
import ListProducts from './views/ListProducts.vue'
import addclient from './views/AddClient.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/client',
      name: 'list-clients',
      component: ListClient
    },
    {
      path: '/products',
      name: 'list-products',
      component: ListProducts
    },
    {
      path: '/newClient',
      name: 'new-client',
      component: addclient
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
