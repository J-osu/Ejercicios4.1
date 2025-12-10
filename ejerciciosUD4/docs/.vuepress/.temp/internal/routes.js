export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/06101/Desktop/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guia/arquitectura.html", { loader: () => import(/* webpackChunkName: "guia_arquitectura.html" */"C:/Users/06101/Desktop/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/arquitectura.html.js"), meta: {"title":""} }],
  ["/guia/clases-y-datos.html", { loader: () => import(/* webpackChunkName: "guia_clases-y-datos.html" */"C:/Users/06101/Desktop/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/clases-y-datos.html.js"), meta: {"title":""} }],
  ["/guia/estado-y-composable.html", { loader: () => import(/* webpackChunkName: "guia_estado-y-composable.html" */"C:/Users/06101/Desktop/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/estado-y-composable.html.js"), meta: {"title":""} }],
  ["/guia/reglas-y-flujo.html", { loader: () => import(/* webpackChunkName: "guia_reglas-y-flujo.html" */"C:/Users/06101/Desktop/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/reglas-y-flujo.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/06101/Desktop/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
