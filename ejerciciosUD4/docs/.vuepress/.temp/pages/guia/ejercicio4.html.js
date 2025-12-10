import comp from "C:/Users/06101/Desktop/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/guia/ejercicio4.html.vue"
const data = JSON.parse("{\"path\":\"/guia/ejercicio4.html\",\"title\":\"Ejercicio 4: Patrones de Diseño\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"guia/ejercicio4.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
