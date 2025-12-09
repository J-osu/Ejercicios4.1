import { createRouter, createWebHistory } from 'vue-router'
import JuegoCartasView from '@/views/JuegoCartasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'juegoCartas',
      component: JuegoCartasView,
    },
  ],
})

export default router
