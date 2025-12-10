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
          '/guia/arquitectura.md',
          '/guia/clases-y-datos.md',
          '/guia/estado-y-composable.md',
          '/guia/reglas-y-flujo.md'
        ]
      }
    ],
    nav: [
      { text: 'Ir al Componente (App)', link: '/' },
      { text: 'Clases Core', link: '/guia/clases-y-datos.md' }
    ]
  })
})
