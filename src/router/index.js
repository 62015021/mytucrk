import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Adduser from '../views/Adduser.vue'
import Page from '../views/Page.vue'
import Manageusers from '../views/Manageusers.vue'
import turck from '../views/turck.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requireGuest: false
    }
  },
  // {
  //   path: 't/abou', Manageuser
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/page',
    name: 'Page',
    component: Page,
    meta:{
      requireAuth: true
    }
  },
  {
    path: '/adduser',
    name: 'Adduser',
    component: Adduser,
    meta:{
      requireAuth: true
    }
  },
  {
    path: '/manageusers',
    name: 'Manageusers',
    component: Manageusers,
    meta:{
      requireAuth: true
    }
  },
  {
    path: '/turck',
    name: 'turck',
    component: turck,
    meta:{
      requireAuth: true
    }
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
