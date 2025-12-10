<template><div><h1 id="ejercicio-3-gestor-interactivo-de-horarios-de-aulas" tabindex="-1"><a class="header-anchor" href="#ejercicio-3-gestor-interactivo-de-horarios-de-aulas"><span>Ejercicio 3: Gestor Interactivo de Horarios de Aulas</span></a></h1>
<p>El <strong>Ejercicio 3</strong> se centra en el manejo de estructuras de datos para gestionar datos tabulares, utilizando <strong>matrices (arrays bidimensionales)</strong> en TypeScript y Vue.js.</p>
<h2 id="arquitectura-y-diseno" tabindex="-1"><a class="header-anchor" href="#arquitectura-y-diseno"><span>Arquitectura y Diseño</span></a></h2>
<p>El sistema utiliza la <strong>Composition API</strong> para centralizar la lógica de negocio y el estado reactivo, desacoplando la gestión de datos de la interfaz visual.</p>
<h3 id="componentes-y-modulos-principales" tabindex="-1"><a class="header-anchor" href="#componentes-y-modulos-principales"><span>Componentes y Módulos Principales</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Módulo/Archivo</th>
<th style="text-align:left">Tipo</th>
<th style="text-align:left">Propósito</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>src/types/schedule.ts</code></td>
<td style="text-align:left"><strong>Types/Interfaces</strong></td>
<td style="text-align:left">Define la estructura de la reserva (<code v-pre>IAsignatura</code>) y el modelo principal: la matriz <code v-pre>HorarioAula</code>.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GestorHorarios.vue</code></td>
<td style="text-align:left"><strong>Componente (UI/Lógica)</strong></td>
<td style="text-align:left">Contiene el estado reactivo (<code v-pre>horarios</code>) y la lógica <strong>CRUD</strong> (Crear, Leer, Actualizar, Eliminar) que manipula directamente la matriz.</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>HorarioModal.vue</code></td>
<td style="text-align:left"><strong>Componente (UI)</strong></td>
<td style="text-align:left">(Asumido) Recibe la posición <code v-pre>[día][hora]</code> y maneja el formulario para modificar una reserva.</td>
</tr>
</tbody>
</table>
<h2 id="estructura-de-datos-la-matriz" tabindex="-1"><a class="header-anchor" href="#estructura-de-datos-la-matriz"><span>Estructura de Datos: La Matriz</span></a></h2>
<p>La clave de la arquitectura es el uso de la matriz bidimensional para representar la disponibilidad horaria de un aula.</p>
<ul>
<li>
<p><strong><code v-pre>BloqueHorario</code></strong>: Tipo de dato que puede ser una reserva (<code v-pre>IAsignatura</code>) o <code v-pre>null</code> (si está libre).</p>
</li>
<li>
<p><strong><code v-pre>HorarioAula</code></strong>: La matriz principal, definida como:</p>
<p>$$\text{BloqueHorario}[\text{Días}][\text{Horas}]$$</p>
</li>
<li>
<p><strong><code v-pre>HorariosData</code></strong>: Un mapa que asocia el nombre de un aula a su respectiva matriz <code v-pre>HorarioAula</code>.</p>
</li>
</ul>
<h2 id="flujo-de-gestion-crud" tabindex="-1"><a class="header-anchor" href="#flujo-de-gestion-crud"><span>Flujo de Gestión (CRUD)</span></a></h2>
<p>El componente <code v-pre>GestorHorarios.vue</code> realiza todas las operaciones modificando la matriz en memoria, asegurando que la interfaz se actualice automáticamente gracias a la reactividad de Vue.</p>
<ol>
<li><strong>Leer (Read)</strong>: Se usa una propiedad <code v-pre>computed</code> para acceder al array: <code v-pre>horarios.value[aulaSeleccionada]</code>.</li>
<li><strong>Crear/Actualizar (Create/Update)</strong>: La función <code v-pre>guardarReserva</code> actualiza un índice específico de la matriz con el nuevo objeto de asignatura:
$$\text{horarios.value[aula][dia][hora]} = \text{NuevaReserva}$$</li>
<li><strong>Eliminar (Delete)</strong>: La función <code v-pre>eliminarReserva</code> establece el valor de un índice a <code v-pre>null</code>:
$$\text{horarios.value[aula][dia][hora]} = \text{null}$$</li>
</ol>
</div></template>


