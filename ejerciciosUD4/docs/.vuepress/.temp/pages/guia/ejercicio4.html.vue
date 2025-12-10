<template><div><h1 id="ejercicio-4-patrones-de-diseno" tabindex="-1"><a class="header-anchor" href="#ejercicio-4-patrones-de-diseno"><span>Ejercicio 4: Patrones de Diseño</span></a></h1>
<p>El <strong>Ejercicio 4</strong> implementa dos patrones de diseño fundamentales en la arquitectura de software: <strong>Singleton</strong> y <strong>Factoría (Factory Method)</strong>.</p>
<h2 id="_4-1-patron-singleton-gestor-de-configuracion-appconfig" tabindex="-1"><a class="header-anchor" href="#_4-1-patron-singleton-gestor-de-configuracion-appconfig"><span>4.1 Patrón Singleton: Gestor de Configuración (<code v-pre>AppConfig</code>)</span></a></h2>
<p>El patrón Singleton garantiza que una clase solo tenga <strong>una única instancia</strong> y proporciona un punto de acceso global a ella.</p>
<h3 id="implementacion-clave" tabindex="-1"><a class="header-anchor" href="#implementacion-clave"><span>Implementación Clave</span></a></h3>
<p>La clase <code v-pre>AppConfig</code> centraliza la configuración global (<code v-pre>theme</code>, <code v-pre>language</code>, etc.).</p>
<table>
<thead>
<tr>
<th style="text-align:left">Elemento</th>
<th style="text-align:left">Propósito</th>
<th style="text-align:left">Principio</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong><code v-pre>private constructor()</code></strong></td>
<td style="text-align:left"><strong>Restringe</strong> la creación de instancias externas mediante <code v-pre>new</code>.</td>
<td style="text-align:left">Controla el flujo de instanciación.</td>
</tr>
<tr>
<td style="text-align:left"><strong><code v-pre>private static instance</code></strong></td>
<td style="text-align:left">Almacena la referencia a la única instancia creada.</td>
<td style="text-align:left">Garantía de unicidad.</td>
</tr>
<tr>
<td style="text-align:left"><strong><code v-pre>public static getInstance()</code></strong></td>
<td style="text-align:left">El <strong>punto de acceso</strong> global. Si la instancia no existe, la crea y la devuelve.</td>
<td style="text-align:left">Acceso controlado y global.</td>
</tr>
<tr>
<td style="text-align:left"><strong><code v-pre>private _settings</code></strong></td>
<td style="text-align:left">Estado interno reactivo (utilizando <code v-pre>ref</code> de Vue) de la configuración.</td>
<td style="text-align:left"><strong>Encapsulación</strong> de los datos.</td>
</tr>
</tbody>
</table>
<h3 id="flujo" tabindex="-1"><a class="header-anchor" href="#flujo"><span>Flujo</span></a></h3>
<p>Cualquier componente (ej. <code v-pre>PanelDeControl.vue</code> o <code v-pre>ContenidoPrincipal.vue</code>) obtiene la configuración usando siempre el mismo método:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token comment">// Componente A y Componente B acceden al mismo objeto:</span></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> AppConfig<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> settings <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">getSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Configuración reactiva</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


