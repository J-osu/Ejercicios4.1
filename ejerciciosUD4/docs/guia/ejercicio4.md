# Patron Singleton: Configuracion Unica

Usamos el patron **Singleton** para la configuracion (`theme`, `language`, etc.) porque solo debe existir **una** version de estos ajustes en toda la aplicacion.

## Por que Singleton

El objetivo es tener una **"unica version de la verdad"**. Si un componente cambia el tema a 'dark', todos los demas componentes lo ven al instante, porque todos estan mirando el mismo objeto. 

## La Clase AppConfig

Esta clase hace magia: guarda los ajustes en el navegador (`localStorage`) y usa las herramientas de Vue (`ref`) para hacer que los cambios se vean en tiempo real.

### API que usamos

* **`AppConfig.getInstance()`**: La unica manera de empezar. Te da el objeto de configuracion.
* **`config.getSettings()`**: Te devuelve la configuracion, pero es **reactiva** y de solo lectura. Si el idioma cambia, tu componente cambia solo.
* **`config.setTheme('dark')` / `config.setLanguage('es')`**: Estos metodos cambian el valor y, de paso, lo guardan en el navegador.

---

## Guia de Uso Rapido: Ejemplos

### 1. PanelDeControl.vue (Para MODIFICAR)

El Panel de Control pide la instancia y llama a los *setters* (los metodos para cambiar la configuracion).

```typescript
// Desde PanelDeControl.vue

// 1. Pedimos el objeto unico
const configService = AppConfig.getInstance();
const settings = configService.getSettings();

const changeTheme = (event: Event) => {
  // 2. Usamos el setter para modificar el valor global
  const newTheme = (event.target as HTMLSelectElement).value;
  configService.setTheme(newTheme);
};

const changeLanguage = (event: Event) => {
  // 3. Este cambio se guardara en localStorage y sera visto por ContenidoPrincipal
  const newLang = (event.target as HTMLSelectElement).value;
  configService.setLanguage(newLang);
};