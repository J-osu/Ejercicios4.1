3. Lógica de Interacción y Funciones

El componente gestiona la reactividad de la matriz de butacas, lo que permite que el resumen y el total se actualicen en tiempo real al hacer clic.

3.1 Función seleccionarButaca(filaIndex, columnaIndex)

Esta función maneja el clic del usuario y sigue las reglas de transición de estado:

1-DISPONIBLE → SELECCIONADO: Si la butaca está disponible, se marca como SELECCIONADO.

2-SELECCIONADO → DISPONIBLE: Si la butaca ya estaba seleccionada, se desmarca a DISPONIBLE.

3-OCUPADO / DAÑADO: La función ignora el clic si el estado es OCUPADO o DAÑADO, previniendo modificaciones de estado no autorizadas.

3.2 Propiedades Computadas Clave

Propiedad: butacasSeleccionadas

Tipo: Computed&lt;IButaca[]&gt;

Propósito: Filtra la matriz completa para obtener solo los objetos en estado SELECCIONADO.
_____________________________

Propiedad: totalAPagar

Tipo: Computed&lt;number&gt;

Propósito: Calcula butacasSeleccionadas.length * props.precioPorButaca. Se actualiza inmediatamente con cada selección o deselección.
_____________________________

3.3 Función confirmarReserva()

Esta función simula la finalización de la transacción:

1-Condición: Se ejecuta al hacer clic en el botón "Confirmar Reserva" (si hay butacas seleccionadas).

2-Transición de Estado: Mapea la matriz de butacas. Cada butaca en estado SELECCIONADO se cambia a OCUPADO.

3-Persistencia: Las butacas OCUPADO quedan permanentemente fuera del flujo de selección para esta sesión.