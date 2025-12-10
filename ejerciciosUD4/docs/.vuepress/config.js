import { defineUserConfig } from '@vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  title: 'Simulador de Cartas con Pila',
  description: 'Documentación del proyecto "El Último Descarte" con Vue 3',
  base: '/docs/',

  bundler: viteBundler(),

  theme: defaultTheme({
    sidebar: [
      {
        text: 'Introducción',
        children: ['/']
      },
      {
        text: 'Lógica del Juego y Reglas',
        children: [
          '/guia/carta/arquitectura.md',
          '/guia/carta/clases-y-datos.md',
          '/guia/carta/estado-y-composable.md',
          '/guia/carta/reglas-y-flujo.md'
        ]
      },
            {
        text: 'Gestor de horarios y notificaciones',
        children: [
          '/guia/ejercicio3.md',
          '/guia/ejercicio4.md',
          '/guia/ejercicio4-2.md'
        ]
      },
      {
        text: 'Lógica de la compra de entradas de cine',
        children: [
          '/guia/cine/tipos-sala.md',
          '/guia/cine/logica-interaccion.md',
          '/guia/cine/estilos-grid.md',
          '/guia/cine/componente-sala.md'
        ]
      }

    ],
    nav: [
      { text: 'Ir al Componente (App)', link: '/' },
      { text: 'Clases Core', link: '/guia/clases-y-datos.md' }
    ]
  })
})
