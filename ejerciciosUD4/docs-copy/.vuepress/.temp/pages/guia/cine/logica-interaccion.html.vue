<template><div><ol start="3">
<li>Lógica de Interacción y Funciones</li>
</ol>
<p>El componente gestiona la reactividad de la matriz de butacas, lo que permite que el resumen y el total se actualicen en tiempo real al hacer clic.</p>
<p>3.1 Función seleccionarButaca(filaIndex, columnaIndex)</p>
<p>Esta función maneja el clic del usuario y sigue las reglas de transición de estado:</p>
<p>1-DISPONIBLE → SELECCIONADO: Si la butaca está disponible, se marca como SELECCIONADO.</p>
<p>2-SELECCIONADO → DISPONIBLE: Si la butaca ya estaba seleccionada, se desmarca a DISPONIBLE.</p>
<p>3-OCUPADO / DAÑADO: La función ignora el clic si el estado es OCUPADO o DAÑADO, previniendo modificaciones de estado no autorizadas.</p>
<p>3.2 Propiedades Computadas Clave</p>
<p>Propiedad: butacasSeleccionadas</p>
<p>Tipo: Computed&lt;IButaca[]&gt;</p>
<p>Propósito: Filtra la matriz completa para obtener solo los objetos en estado SELECCIONADO.</p>
<hr>
<p>Propiedad: totalAPagar</p>
<p>Tipo: Computed&lt;number&gt;</p>
<p>Propósito: Calcula butacasSeleccionadas.length * props.precioPorButaca. Se actualiza inmediatamente con cada selección o deselección.</p>
<hr>
<p>3.3 Función confirmarReserva()</p>
<p>Esta función simula la finalización de la transacción:</p>
<p>1-Condición: Se ejecuta al hacer clic en el botón &quot;Confirmar Reserva&quot; (si hay butacas seleccionadas).</p>
<p>2-Transición de Estado: Mapea la matriz de butacas. Cada butaca en estado SELECCIONADO se cambia a OCUPADO.</p>
<p>3-Persistencia: Las butacas OCUPADO quedan permanentemente fuera del flujo de selección para esta sesión.</p>
</div></template>


