import { GitContributors } from "C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/josue/OneDrive/Documentos/2ºDAW/DWEC/Ejercicios/Grid/Ejercicios4.1/ejerciciosUD4/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
