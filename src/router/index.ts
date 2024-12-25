import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vant',
      name: 'vant',
      component: () => import('@/views/VantView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('@/views/PiniaView.vue')
    },
    {
      path: '/router',
      name: 'router',
      component: () => import('@/views/RouterView.vue'),
      children: [
        {
          path: 'dynamic/:id',
          name: 'dynamic',
          component: () => import('@/views/RouterView.vue')
        },
        {
          path: 'query',
          name: 'query',
          component: () => import('@/views/RouterView.vue')
        },
        {
          path: 'guard',
          name: 'guard',
          component: () => import('@/views/RouterView.vue')
        }
      ]
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: () => import('@/views/MobileView.vue')
    }
  ]
})

export default router
