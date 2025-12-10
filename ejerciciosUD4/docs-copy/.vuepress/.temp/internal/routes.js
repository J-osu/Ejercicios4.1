export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/index.html.js"), meta: {} }],
  ["/guia/cartas/arquitectura.html", { loader: () => import(/* webpackChunkName: "guia_cartas_arquitectura.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cartas/arquitectura.html.js"), meta: {} }],
  ["/guia/cartas/clases-y-datos.html", { loader: () => import(/* webpackChunkName: "guia_cartas_clases-y-datos.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cartas/clases-y-datos.html.js"), meta: {} }],
  ["/guia/cartas/estado-y-composable.html", { loader: () => import(/* webpackChunkName: "guia_cartas_estado-y-composable.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cartas/estado-y-composable.html.js"), meta: {} }],
  ["/guia/cartas/reglas-y-flujo.html", { loader: () => import(/* webpackChunkName: "guia_cartas_reglas-y-flujo.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cartas/reglas-y-flujo.html.js"), meta: {} }],
  ["/guia/cine/componente-sala.html", { loader: () => import(/* webpackChunkName: "guia_cine_componente-sala.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cine/componente-sala.html.js"), meta: {} }],
  ["/guia/cine/estilos-grid.html", { loader: () => import(/* webpackChunkName: "guia_cine_estilos-grid.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cine/estilos-grid.html.js"), meta: {} }],
  ["/guia/cine/logica-interaccion.html", { loader: () => import(/* webpackChunkName: "guia_cine_logica-interaccion.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cine/logica-interaccion.html.js"), meta: {} }],
  ["/guia/cine/tipos-sala.html", { loader: () => import(/* webpackChunkName: "guia_cine_tipos-sala.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/cine/tipos-sala.html.js"), meta: {} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/404.html.js"), meta: {} }],
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
