import comp from "C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765396417000,\"contributors\":[{\"name\":\"Ismael\",\"username\":\"Ismael\",\"email\":\"08062006ismael@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Ismael\"}],\"changelog\":[{\"hash\":\"6ea41ac32db4503771c9c1c480bf16b86ddc4640\",\"time\":1765396417000,\"email\":\"08062006ismael@gmail.com\",\"author\":\"Ismael\",\"message\":\"VUEPRESS\"}]},\"filePathRelative\":\"README.md\"}")
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
