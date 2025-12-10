<template><div><h1 id="reglas-y-flujo-del-juego-el-ultimo-descarte" tabindex="-1"><a class="header-anchor" href="#reglas-y-flujo-del-juego-el-ultimo-descarte"><span>Reglas y Flujo del Juego: &quot;El Último Descarte&quot;</span></a></h1>
<p>Esta página explica el objetivo y las reglas de interacción del juego, que es la simulación del uso de estructuras de datos Pila (Stack).</p>
<p><strong>Objetivo del Juego</strong></p>
<p>Quedarse sin cartas en la mano.</p>
<p><strong>Flujo del Turno</strong></p>
<p>El juego comienza con el jugador con 7 cartas y una carta inicial en la Pila de Descarte.</p>
<h2 id="_1-jugar-una-carta" tabindex="-1"><a class="header-anchor" href="#_1-jugar-una-carta"><span>1. Jugar una Carta</span></a></h2>
<p>El jugador puede jugar una carta de su mano si se cumple la Regla de Coincidencia:</p>
<p>Coincidencia Válida: La carta seleccionada debe coincidir en Palo O en Valor con la carta que se encuentra en la cima de la Pila de Descarte.</p>
<p>Acción: Si la jugada es válida, la carta se mueve de tu mano a la Pila de Descarte.</p>
<h3 id="_2-robar-y-finalizar-turno" tabindex="-1"><a class="header-anchor" href="#_2-robar-y-finalizar-turno"><span>2. Robar y Finalizar Turno</span></a></h3>
<p>Si el jugador no tiene cartas jugables, o decide no jugar estratégicamente, debe hacer clic en el Mazo de Robo.</p>
<p>Acción: Se roba una carta del Mazo.</p>
<p>Consecuencia: Robar una carta finaliza el turno del jugador.</p>
<h4 id="_3-condicion-especial-mazo-vacio" tabindex="-1"><a class="header-anchor" href="#_3-condicion-especial-mazo-vacio"><span>3. Condición Especial: Mazo Vacío</span></a></h4>
<p>Si el Mazo de Robo se queda sin cartas y el jugador necesita robar, el sistema realiza una Reconstitución de Mazo:</p>
<p>La carta superior de la Pila de Descarte se mantiene.</p>
<p>El resto de las cartas de descarte se barajan y se utilizan para reconstruir el Mazo de Robo.</p>
<p>La Pila de Descarte queda con una sola carta (la que se mantuvo).</p>
</div></template>


