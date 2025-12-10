# Ejercicio 4: Patrones de Diseño

El **Ejercicio 4** implementa dos patrones de diseño fundamentales en la arquitectura de software: **Singleton** y **Factoría (Factory Method)**.

## 4.1 Patrón Singleton: Gestor de Configuración (`AppConfig`)

El patrón Singleton garantiza que una clase solo tenga **una única instancia** y proporciona un punto de acceso global a ella.

### Implementación Clave

La clase `AppConfig` centraliza la configuración global (`theme`, `language`, etc.).

| Elemento | Propósito | Principio |
| :--- | :--- | :--- |
| **`private constructor()`** | **Restringe** la creación de instancias externas mediante `new`. | Controla el flujo de instanciación. |
| **`private static instance`** | Almacena la referencia a la única instancia creada. | Garantía de unicidad. |
| **`public static getInstance()`** | El **punto de acceso** global. Si la instancia no existe, la crea y la devuelve. | Acceso controlado y global. |
| **`private _settings`** | Estado interno reactivo (utilizando `ref` de Vue) de la configuración. | **Encapsulación** de los datos. |



### Flujo

Cualquier componente (ej. `PanelDeControl.vue` o `ContenidoPrincipal.vue`) obtiene la configuración usando siempre el mismo método:

```typescript
// Componente A y Componente B acceden al mismo objeto:
const config = AppConfig.getInstance();
const settings = config.getSettings(); // Configuración reactiva