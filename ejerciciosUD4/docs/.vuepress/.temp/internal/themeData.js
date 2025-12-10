export const themeData = JSON.parse("{\"sidebar\":[{\"text\":\"Introducción\",\"children\":[\"/\"]},{\"text\":\"Lógica del Juego y Reglas\",\"children\":[\"/guia/carta/arquitectura.md\",\"/guia/carta/clases-y-datos.md\",\"/guia/carta/estado-y-composable.md\",\"/guia/carta/reglas-y-flujo.md\"]},{\"text\":\"Gestor de horarios y notificaciones\",\"children\":[\"/guia/ejercicio3.md\",\"/guia/ejercicio4.md\",\"/guia/ejercicio4-2.md\"]},{\"text\":\"Lógica de la compra de entradas de cine\",\"children\":[\"/guia/cine/tipos-sala.md\",\"/guia/cine/logica-interaccion.md\",\"/guia/cine/estilos-grid.md\",\"/guia/cine/componente-sala.md\"]}],\"nav\":[{\"text\":\"Ir al Componente (App)\",\"link\":\"/\"},{\"text\":\"Clases Core\",\"link\":\"/guia/clases-y-datos.md\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
