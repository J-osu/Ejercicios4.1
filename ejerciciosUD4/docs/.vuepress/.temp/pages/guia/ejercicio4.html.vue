<template><div><h1 id="patron-singleton-configuracion-unica" tabindex="-1"><a class="header-anchor" href="#patron-singleton-configuracion-unica"><span>Patron Singleton: Configuracion Unica</span></a></h1>
<p>Usamos el patron <strong>Singleton</strong> para la configuracion (<code v-pre>theme</code>, <code v-pre>language</code>, etc.) porque solo debe existir <strong>una</strong> version de estos ajustes en toda la aplicacion.</p>
<h2 id="por-que-singleton" tabindex="-1"><a class="header-anchor" href="#por-que-singleton"><span>Por que Singleton</span></a></h2>
<p>El objetivo es tener una <strong>&quot;unica version de la verdad&quot;</strong>. Si un componente cambia el tema a 'dark', todos los demas componentes lo ven al instante, porque todos estan mirando el mismo objeto.</p>
<h2 id="la-clase-appconfig" tabindex="-1"><a class="header-anchor" href="#la-clase-appconfig"><span>La Clase AppConfig</span></a></h2>
<p>Esta clase hace magia: guarda los ajustes en el navegador (<code v-pre>localStorage</code>) y usa las herramientas de Vue (<code v-pre>ref</code>) para hacer que los cambios se vean en tiempo real.</p>
<h3 id="api-que-usamos" tabindex="-1"><a class="header-anchor" href="#api-que-usamos"><span>API que usamos</span></a></h3>
<ul>
<li><strong><code v-pre>AppConfig.getInstance()</code></strong>: La unica manera de empezar. Te da el objeto de configuracion.</li>
<li><strong><code v-pre>config.getSettings()</code></strong>: Te devuelve la configuracion, pero es <strong>reactiva</strong> y de solo lectura. Si el idioma cambia, tu componente cambia solo.</li>
<li><strong><code v-pre>config.setTheme('dark')</code> / <code v-pre>config.setLanguage('es')</code></strong>: Estos metodos cambian el valor y, de paso, lo guardan en el navegador.</li>
</ul>
<hr>
<h2 id="guia-de-uso-rapido-ejemplos" tabindex="-1"><a class="header-anchor" href="#guia-de-uso-rapido-ejemplos"><span>Guia de Uso Rapido: Ejemplos</span></a></h2>
<h3 id="_1-paneldecontrol-vue-para-modificar" tabindex="-1"><a class="header-anchor" href="#_1-paneldecontrol-vue-para-modificar"><span>1. PanelDeControl.vue (Para MODIFICAR)</span></a></h3>
<p>El Panel de Control pide la instancia y llama a los <em>setters</em> (los metodos para cambiar la configuracion).</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token comment">// Desde PanelDeControl.vue</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1. Pedimos el objeto unico</span></span>
<span class="line"><span class="token keyword">const</span> configService <span class="token operator">=</span> AppConfig<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> settings <span class="token operator">=</span> configService<span class="token punctuation">.</span><span class="token function">getSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">changeTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 2. Usamos el setter para modificar el valor global</span></span>
<span class="line">  <span class="token keyword">const</span> newTheme <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLSelectElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">  configService<span class="token punctuation">.</span><span class="token function">setTheme</span><span class="token punctuation">(</span>newTheme<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">changeLanguage</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 3. Este cambio se guardara en localStorage y sera visto por ContenidoPrincipal</span></span>
<span class="line">  <span class="token keyword">const</span> newLang <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLSelectElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">  configService<span class="token punctuation">.</span><span class="token function">setLanguage</span><span class="token punctuation">(</span>newLang<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


