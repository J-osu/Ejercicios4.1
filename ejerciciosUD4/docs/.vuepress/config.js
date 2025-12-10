import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
// Import the theme package as the default export (works for CJS and ESM interop)
import themePkg from '@vuepress/theme-default';

// Resolve the actual theme factory function in a cross-module way
const defaultTheme = (themePkg && (themePkg.defaultTheme || themePkg.default || themePkg));

// Theme options to be passed when VuePress invokes the theme with ctx
const themeOptions = {
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
};

export default defineUserConfig({
  title: 'Simulador de Cartas con Pila',
  description: 'Documentación del proyecto "El Último Descarte" con Vue 3',
  base: '/docs/',

  // Usamos Vite como bundler
  bundler: viteBundler(),
  // Para compatibilidad entre versiones de VuePress, usamos el tema por nombre
  // y proporcionamos las opciones bajo `themeConfig` (forma clásica de VuePress v1).
  theme: 'default',
  themeConfig: themeOptions
});