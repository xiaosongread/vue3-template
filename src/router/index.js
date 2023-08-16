import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'

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

router.beforeEach(async (to, from, next) => {
  await store.dispatch('getMenuList')
  if (router.hasRoute('Test')) {
    next()
  } else {
    router.addRoute({
      path: '/test',
      name: 'Test',
      component: () => import('../views/test.vue')
    })
    // console.log('11', store.getters.asyncMenuList.length)
    // store.getters.asyncMenuList.forEach(item => {
    //   router.addRoute(item)
    // })
    // console.log('22', router.getRoutes())
    next(to)
  }
})
export default router


