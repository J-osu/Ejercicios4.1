import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  lang: 'es-ES',
  title: 'Simulador de Cartas con Pila',
  description: 'Documentación del proyecto "El Último Descarte" con Vue 3',
  base: '/docs/',

  bundler: viteBundler(),
  
  theme: '@vuepress/theme-default',
  
  themeConfig: {
    sidebar: [
      {
        text: 'Introducción',
        children: ['/']
      },
      {
        text: 'Lógica del Juego y Reglas',
        children: [
          '/guia/cartas/arquitectura.md',
          '/guia/cartas/clases-y-datos.md',
          '/guia/cartas/estado-y-composable.md',
          '/guia/cartas/reglas-y-flujo.md'
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
      { text: 'Home', link: '/' },
      { text: 'Cartas', link: '/guia/cartas/clases-y-datos.md' },
      { text: 'Cine', link: '/guia/cine/tipos-sala.md' }
    ]
  }
});