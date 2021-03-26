import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Art from '../views/Art.vue'
import Preview from '../views/Preview.vue'
import FrameIndex from '../views/FrameIndex.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/frame',
    name: 'FrameIndex',
    component: FrameIndex
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
    props: (route) => ({
      frameId: route.params.frameId,
      previewId: route.query.punk,
    })
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
