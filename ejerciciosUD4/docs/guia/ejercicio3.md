# Ejercicio 3: Gestion de Horarios de Aulas

Este ejercicio se basa en usar **matrices** (tablas de datos) para organizar los horarios de varias aulas.

## Arquitectura y Datos

La clave es que el horario no es una lista, es una **matriz bidimensional**. La aplicacion usa la **Composition API** de Vue para que todos los datos sean **reactivos** (si cambian, la tabla se actualiza sola).

### Tipos de Datos Clave (`schedule.ts`)

| Tipo | Descripcion | Codigo Clave |
| :--- | :--- | :--- |
| `Asignatura` | La reserva, con nombre, profesor y grupo. | `export interface Asignatura { ... }` |
| `BloqueHorario` | La celda de la tabla. Puede ser una `Asignatura` o **`null`** (libre). | `export type BloqueHorario = Asignatura | null;` |
| `HorarioAula` | La matriz completa de un aula (Filas x Columnas). | `export type HorarioAula = BloqueHorario[][];` |
| `Aula` | Combina el `id`, `nombre` y su matriz de `horario`. | `export interface Aula { ... }` |

## Flujo: Modificar la Matriz

El componente `GestorHorarios.vue` maneja la lista de aulas y usa la posicion (indiceDia, indiceBloque) para saber exactamente que celda modificar.

### Funciones de Uso (CRUD)

1.  **Pinchar y Abrir Modal**: El componente llama a **`abrirModal(indiceDia, indiceBloque, datosBloque)`** para abrir la ventana de edicion (`ModalReserva.vue`).

2.  **Guardar Reserva**: Esta funcion es la que actualiza la matriz. Se accede al aula, y luego a la posicion exacta para asignar el nuevo objeto de reserva.

```typescript
// Desde GestorHorarios.vue
function guardarReserva(payload) {
    const aula = aulas.value.find(a => a.id === idAulaSeleccionada.value);
    
    if (aula) {
        // Accede a la matriz usando los indices y asigna el objeto Asignatura
        aula.horario[payload.indiceDia][payload.indiceBloque] = payload.reserva;
    }
}