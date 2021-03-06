import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/data',
    name: 'data',
    component: () => import('@/views/data/index.vue')
  }
]

export default routes
