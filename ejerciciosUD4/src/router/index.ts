import { createRouter, createWebHistory } from 'vue-router'
import JuegoCartasView from '@/views/JuegoCartasView.vue'
import SalaCineView from '@/views/SalaCineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'juegoCartas',
      component: JuegoCartasView,
    },
    {
      path: '/sala-cine',
      name: 'salaCine',
      component: SalaCineView,
    }
  ],
})

export default router
