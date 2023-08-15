import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/about.vue')
  },
  {
    path: '/home',
    name: 'Home', 
    component: () => import('../views/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


