<template><div><h1 id="_4-2-patron-factoria-el-creador-de-notificaciones" tabindex="-1"><a class="header-anchor" href="#_4-2-patron-factoria-el-creador-de-notificaciones"><span>4.2 Patron Factoria: El Creador de Notificaciones</span></a></h1>
<p>Este ejercicio usa el patron <strong>Factoria</strong> para gestionar el envio de mensajes. Es como tener un <em>jefe</em> que se encarga de decidir que tipo de mensaje enviar, para que tu no tengas que preocuparte por los detalles.</p>
<h2 id="por-que-factoria" tabindex="-1"><a class="header-anchor" href="#por-que-factoria"><span>Por que Factoria</span></a></h2>
<p>La idea es la <strong>flexibilidad</strong>. Si manana queremos anadir notificaciones por WhatsApp, solo tenemos que tocar la <em>Factoria</em> y el <em>Worker</em> de WhatsApp. El componente principal que envia mensajes no tiene que cambiar.</p>
<h2 id="estructura-el-contrato-y-los-trabajadores" tabindex="-1"><a class="header-anchor" href="#estructura-el-contrato-y-los-trabajadores"><span>Estructura: El Contrato y los Trabajadores</span></a></h2>
<ol>
<li><strong>El Contrato (<code v-pre>INotifier.ts</code>)</strong>: Es la regla principal. Dice: &quot;Todo el que quiera ser un notificador debe tener un metodo <code v-pre>send(message)</code>&quot;.</li>
<li><strong>Los Trabajadores (Workers)</strong>: Son las clases concretas que implementan el contrato:
<ul>
<li><code v-pre>EmailNotifier.ts</code></li>
<li><code v-pre>SmsNotifier.ts</code></li>
<li><code v-pre>PushNotifier.ts</code></li>
</ul>
</li>
</ol>
<h2 id="la-factoria-el-jefe" tabindex="-1"><a class="header-anchor" href="#la-factoria-el-jefe"><span>La Factoria (El Jefe)</span></a></h2>
<p>Existe una funcion (<code v-pre>notificationFactory</code>) que actua como el <em>jefe</em> de la Factoria.</p>
<ul>
<li>El <strong>Jefe</strong> recibe el tipo de notificador que quieres (<code v-pre>'email'</code>, <code v-pre>'sms'</code>, etc.).</li>
<li>El <strong>Jefe</strong> crea la clase correcta (<code v-pre>new EmailNotifier()</code>).</li>
<li>El <strong>Jefe</strong> te devuelve el objeto listo para usar, pero solo te dice: &quot;Aqui tienes algo que puede hacer <code v-pre>.send()</code>&quot;.</li>
</ul>
<h2 id="guia-de-uso-en-el-componente" tabindex="-1"><a class="header-anchor" href="#guia-de-uso-en-el-componente"><span>Guia de Uso en el Componente</span></a></h2>
<p>El componente <code v-pre>NotificationComposer.vue</code> es el <strong>Cliente</strong>. El no se complica: solo llama al jefe y usa lo que le den.</p>
<h3 id="el-flujo-en-notificationcomposer-vue" tabindex="-1"><a class="header-anchor" href="#el-flujo-en-notificationcomposer-vue"><span>El flujo en <code v-pre>NotificationComposer.vue</code></span></a></h3>
<ol>
<li>
<p>El componente pide a la Factoria el objeto, usando el tipo seleccionado por el usuario:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token keyword">const</span> notifier <span class="token operator">=</span> <span class="token function">notificationFactory</span><span class="token punctuation">(</span>selectedType<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>Una vez que tiene el objeto, el componente simplemente llama al metodo <code v-pre>send()</code> sin importarle si es un correo o un SMS:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">notifier<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<p>Esto asegura que el codigo de envio sea limpio y simple.</p>
</div></template>


