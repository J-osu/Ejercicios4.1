# Ejercicio 3: Gestor Interactivo de Horarios de Aulas

El **Ejercicio 3** se centra en el manejo de estructuras de datos para gestionar datos tabulares, utilizando **matrices (arrays bidimensionales)** en TypeScript y Vue.js.

## Arquitectura y Diseño

El sistema utiliza la **Composition API** para centralizar la lógica de negocio y el estado reactivo, desacoplando la gestión de datos de la interfaz visual.

### Componentes y Módulos Principales

| Módulo/Archivo | Tipo | Propósito |
| :--- | :--- | :--- |
| `src/types/schedule.ts` | **Types/Interfaces** | Define la estructura de la reserva (`IAsignatura`) y el modelo principal: la matriz `HorarioAula`. |
| `GestorHorarios.vue` | **Componente (UI/Lógica)** | Contiene el estado reactivo (`horarios`) y la lógica **CRUD** (Crear, Leer, Actualizar, Eliminar) que manipula directamente la matriz. |
| `HorarioModal.vue` | **Componente (UI)** | (Asumido) Recibe la posición `[día][hora]` y maneja el formulario para modificar una reserva. |

## Estructura de Datos: La Matriz

La clave de la arquitectura es el uso de la matriz bidimensional para representar la disponibilidad horaria de un aula.

* **`BloqueHorario`**: Tipo de dato que puede ser una reserva (`IAsignatura`) o `null` (si está libre).
* **`HorarioAula`**: La matriz principal, definida como:

    $$\text{BloqueHorario}[\text{Días}][\text{Horas}]$$

* **`HorariosData`**: Un mapa que asocia el nombre de un aula a su respectiva matriz `HorarioAula`.



## Flujo de Gestión (CRUD)

El componente `GestorHorarios.vue` realiza todas las operaciones modificando la matriz en memoria, asegurando que la interfaz se actualice automáticamente gracias a la reactividad de Vue.

1.  **Leer (Read)**: Se usa una propiedad `computed` para acceder al array: `horarios.value[aulaSeleccionada]`.
2.  **Crear/Actualizar (Create/Update)**: La función `guardarReserva` actualiza un índice específico de la matriz con el nuevo objeto de asignatura:
    $$\text{horarios.value[aula][dia][hora]} = \text{NuevaReserva}$$
3.  **Eliminar (Delete)**: La función `eliminarReserva` establece el valor de un índice a `null`:
    $$\text{horarios.value[aula][dia][hora]} = \text{null}$$