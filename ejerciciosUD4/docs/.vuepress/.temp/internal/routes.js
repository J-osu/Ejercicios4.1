export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guia/ejercicio3.html", { loader: () => import(/* webpackChunkName: "guia_ejercicio3.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/ejercicio3.html.js"), meta: {"title":"Ejercicio 3: Gestion de Horarios de Aulas"} }],
  ["/guia/ejercicio4-2.html", { loader: () => import(/* webpackChunkName: "guia_ejercicio4-2.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/ejercicio4-2.html.js"), meta: {"title":"4.2 Patron Factoria: El Creador de Notificaciones"} }],
  ["/guia/ejercicio4.html", { loader: () => import(/* webpackChunkName: "guia_ejercicio4.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/ejercicio4.html.js"), meta: {"title":"Patron Singleton: Configuracion Unica"} }],
  ["/guia/cartas/arquitectura.html", { loader: () => import(/* webpackChunkName: "guia_cartas_arquitectura.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cartas/arquitectura.html.js"), meta: {"title":"Arquitectura y Diseno del Sistema"} }],
  ["/guia/cartas/clases-y-datos.html", { loader: () => import(/* webpackChunkName: "guia_cartas_clases-y-datos.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cartas/clases-y-datos.html.js"), meta: {"title":"Clases Core y Modelado de Datos"} }],
  ["/guia/cartas/estado-y-composable.html", { loader: () => import(/* webpackChunkName: "guia_cartas_estado-y-composable.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cartas/estado-y-composable.html.js"), meta: {"title":""} }],
  ["/guia/cartas/reglas-y-flujo.html", { loader: () => import(/* webpackChunkName: "guia_cartas_reglas-y-flujo.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cartas/reglas-y-flujo.html.js"), meta: {"title":"Reglas y Flujo del Juego: \"El Último Descarte\""} }],
  ["/guia/cine/componente-sala.html", { loader: () => import(/* webpackChunkName: "guia_cine_componente-sala.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cine/componente-sala.html.js"), meta: {"title":"2. Componente Principal SalaCine.vue"} }],
  ["/guia/cine/estilos-grid.html", { loader: () => import(/* webpackChunkName: "guia_cine_estilos-grid.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cine/estilos-grid.html.js"), meta: {"title":"4. Estilos Visuales y CSS Grid Dinámico"} }],
  ["/guia/cine/logica-interaccion.html", { loader: () => import(/* webpackChunkName: "guia_cine_logica-interaccion.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cine/logica-interaccion.html.js"), meta: {"title":"3. Lógica de Interacción y Funciones"} }],
  ["/guia/cine/tipos-sala.html", { loader: () => import(/* webpackChunkName: "guia_cine_tipos-sala.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cine/tipos-sala.html.js"), meta: {"title":"1. Tipos de Datos y Estructura de la Sala"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
