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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


