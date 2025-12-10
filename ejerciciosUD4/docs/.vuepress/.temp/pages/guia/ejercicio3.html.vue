<template><div><h1 id="ejercicio-3-gestion-de-horarios-de-aulas" tabindex="-1"><a class="header-anchor" href="#ejercicio-3-gestion-de-horarios-de-aulas"><span>Ejercicio 3: Gestion de Horarios de Aulas</span></a></h1>
<p>Este ejercicio se basa en usar <strong>matrices</strong> (tablas de datos) para organizar los horarios de varias aulas.</p>
<h2 id="arquitectura-y-datos" tabindex="-1"><a class="header-anchor" href="#arquitectura-y-datos"><span>Arquitectura y Datos</span></a></h2>
<p>La clave es que el horario no es una lista, es una <strong>matriz bidimensional</strong>. La aplicacion usa la <strong>Composition API</strong> de Vue para que todos los datos sean <strong>reactivos</strong> (si cambian, la tabla se actualiza sola).</p>
<h3 id="tipos-de-datos-clave-schedule-ts" tabindex="-1"><a class="header-anchor" href="#tipos-de-datos-clave-schedule-ts"><span>Tipos de Datos Clave (<code v-pre>schedule.ts</code>)</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Tipo</th>
<th style="text-align:left">Descripcion</th>
<th style="text-align:left">Codigo Clave</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>Asignatura</code></td>
<td style="text-align:left">La reserva, con nombre, profesor y grupo.</td>
<td style="text-align:left"><code v-pre>export interface Asignatura { ... }</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>BloqueHorario</code></td>
<td style="text-align:left">La celda de la tabla. Puede ser una <code v-pre>Asignatura</code> o <strong><code v-pre>null</code></strong> (libre).</td>
<td style="text-align:left">`export type BloqueHorario = Asignatura</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>HorarioAula</code></td>
<td style="text-align:left">La matriz completa de un aula (Filas x Columnas).</td>
<td style="text-align:left"><code v-pre>export type HorarioAula = BloqueHorario[][];</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>Aula</code></td>
<td style="text-align:left">Combina el <code v-pre>id</code>, <code v-pre>nombre</code> y su matriz de <code v-pre>horario</code>.</td>
<td style="text-align:left"><code v-pre>export interface Aula { ... }</code></td>
</tr>
</tbody>
</table>
<h2 id="flujo-modificar-la-matriz" tabindex="-1"><a class="header-anchor" href="#flujo-modificar-la-matriz"><span>Flujo: Modificar la Matriz</span></a></h2>
<p>El componente <code v-pre>GestorHorarios.vue</code> maneja la lista de aulas y usa la posicion (indiceDia, indiceBloque) para saber exactamente que celda modificar.</p>
<h3 id="funciones-de-uso-crud" tabindex="-1"><a class="header-anchor" href="#funciones-de-uso-crud"><span>Funciones de Uso (CRUD)</span></a></h3>
<ol>
<li>
<p><strong>Pinchar y Abrir Modal</strong>: El componente llama a <strong><code v-pre>abrirModal(indiceDia, indiceBloque, datosBloque)</code></strong> para abrir la ventana de edicion (<code v-pre>ModalReserva.vue</code>).</p>
</li>
<li>
<p><strong>Guardar Reserva</strong>: Esta funcion es la que actualiza la matriz. Se accede al aula, y luego a la posicion exacta para asignar el nuevo objeto de reserva.</p>
</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token comment">// Desde GestorHorarios.vue</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">guardarReserva</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> aula <span class="token operator">=</span> aulas<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>a <span class="token operator">=></span> a<span class="token punctuation">.</span>id <span class="token operator">===</span> idAulaSeleccionada<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>aula<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Accede a la matriz usando los indices y asigna el objeto Asignatura</span></span>
<span class="line">        aula<span class="token punctuation">.</span>horario<span class="token punctuation">[</span>payload<span class="token punctuation">.</span>indiceDia<span class="token punctuation">]</span><span class="token punctuation">[</span>payload<span class="token punctuation">.</span>indiceBloque<span class="token punctuation">]</span> <span class="token operator">=</span> payload<span class="token punctuation">.</span>reserva<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


