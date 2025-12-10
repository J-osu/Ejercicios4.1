<template><div><p>Estado Reactivo con useJuego.ts</p>
<p>El Composable useJuego centraliza toda la lógica y expone el estado del juego como propiedades de solo lectura para que el componente JuegoCartas.vue pueda reaccionar a los cambios sin mutar el estado directamente.</p>
<p>4.1 Estado Reactivo Expuesto</p>
<p>Todas las propiedades están marcadas como readonly para mantener la integridad del estado.</p>
<h3 id="nombre-del-estado-cartasmanojugador" tabindex="-1"><a class="header-anchor" href="#nombre-del-estado-cartasmanojugador"><span>Nombre del Estado: cartasManoJugador</span></a></h3>
<ul>
<li><strong>Tipo:</strong> <code v-pre>readonly&amp;lt;Carta[]&amp;gt;</code></li>
<li><strong>Propósito:</strong> La lista de cartas que el jugador tiene actualmente.</li>
</ul>
<h3 id="nombre-del-estado-cartasuperiordescarte" tabindex="-1"><a class="header-anchor" href="#nombre-del-estado-cartasuperiordescarte"><span>Nombre del Estado: cartaSuperiorDescarte</span></a></h3>
<ul>
<li><strong>Tipo:</strong> <code v-pre>Computed&amp;lt;Carta&amp;gt;</code></li>
<li><strong>Propósito:</strong> La carta actualmente visible en la pila de descarte.</li>
</ul>
<h3 id="nombre-del-estado-cartasrestantesmazo" tabindex="-1"><a class="header-anchor" href="#nombre-del-estado-cartasrestantesmazo"><span>Nombre del Estado: cartasRestantesMazo</span></a></h3>
<ul>
<li><strong>Tipo:</strong> <code v-pre>Computed&amp;lt;number&amp;gt;</code></li>
<li><strong>Propósito:</strong> El número de cartas que quedan en la pila de robo.</li>
</ul>
<h3 id="nombre-del-estado-mensaje" tabindex="-1"><a class="header-anchor" href="#nombre-del-estado-mensaje"><span>Nombre del Estado: mensaje</span></a></h3>
<ul>
<li><strong>Tipo:</strong> <code v-pre>readonly&amp;lt;string&amp;gt;</code></li>
<li><strong>Propósito:</strong> Feedback visible al usuario (victoria, error, robo, etc).</li>
</ul>
<h3 id="nombre-del-estado-juegofinalizado" tabindex="-1"><a class="header-anchor" href="#nombre-del-estado-juegofinalizado"><span>Nombre del Estado: juegoFinalizado</span></a></h3>
<ul>
<li><strong>Tipo:</strong> <code v-pre>readonly&amp;lt;boolean&amp;gt;</code></li>
<li><strong>Propósito:</strong> True si el jugador vació su mano.</li>
</ul>
<h3 id="nombre-del-estado-hayjugadavalida" tabindex="-1"><a class="header-anchor" href="#nombre-del-estado-hayjugadavalida"><span>Nombre del Estado: hayJugadaValida</span></a></h3>
<ul>
<li><strong>Tipo:</strong> <code v-pre>Computed&amp;lt;boolean&amp;gt;</code></li>
<li><strong>Propósito:</strong> UX: True si existe alguna carta en la mano que se pueda jugar.</li>
</ul>
</div></template>


