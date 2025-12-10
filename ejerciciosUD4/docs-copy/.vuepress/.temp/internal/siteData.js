export const siteData = JSON.parse("{\"base\":\"/docs/\",\"lang\":\"es-ES\",\"title\":\"Simulador de Cartas con Pila\",\"description\":\"Documentación del proyecto \\\"El Último Descarte\\\" con Vue 3\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
