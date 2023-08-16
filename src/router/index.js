import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/home',
    name: 'Home', 
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    name: 'About', 
    component: () => import('../views/about.vue')
  },
  {
    path: '/ref',
    name: 'Ref', 
    component: () => import('../views/ref.vue')
  },
  {
    path: '/solt',
    name: 'Solt', 
    component: () => import('../views/solt.vue')
  },
  {
    path: '/provide',
    name: 'Provide', 
    component: () => import('../views/provide.vue')
  },
  {
    path: '/bus',
    name: 'Bus', 
    component: () => import('../views/bus.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


