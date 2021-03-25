import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Art from '../views/Art.vue'
import Preview from '../views/Preview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/punk/:punkId/frame/:frameId',
    name: 'Art',
    component: Art,
    props: true
  },
  {
    path: '/frame/:frameId',
    name: 'Preview',
    component: Preview,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
