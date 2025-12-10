import { createRouter, createWebHistory } from 'vue-router'
import JuegoCartasView from '@/views/JuegoCartasView.vue'
import GestorHorarios from '@/views/GestorHorarios.vue'
import Configuracion from '@/views/ConfiguracionVista.vue'
import NotificationView from '@/views/NotificationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'juegoCartas',
      component: JuegoCartasView,
    },
        {
      path: '/gestor',
      name: 'gestor',
      component: GestorHorarios,
    },
            {
      path: '/panel',
      name: 'panel',
      component: Configuracion,
    },
    {
      path: '/notification',
      name: 'notification',
      component: NotificationView
    }

  ],
})

export default router
