<template><div><p>Reglas y Flujo del Juego: &quot;El Último Descarte&quot;</p>
<p>Esta página explica el objetivo y las reglas de interacción del juego, que es la simulación del uso de estructuras de datos Pila (Stack).</p>
<p>🎯 Objetivo del Juego</p>
<p>Quedarse sin cartas en la mano.</p>
<p>🕹️ Flujo del Turno</p>
<p>El juego comienza con el jugador con 7 cartas y una carta inicial en la Pila de Descarte.</p>
<ol>
<li>Jugar una Carta</li>
</ol>
<p>El jugador puede jugar una carta de su mano si se cumple la Regla de Coincidencia:</p>
<p>Coincidencia Válida: La carta seleccionada debe coincidir en Palo O en Valor con la carta que se encuentra en la cima de la Pila de Descarte.</p>
<p>Acción: Si la jugada es válida, la carta se mueve de tu mano a la Pila de Descarte.</p>
<ol start="2">
<li>Robar y Finalizar Turno</li>
</ol>
<p>Si el jugador no tiene cartas jugables, o decide no jugar estratégicamente, debe hacer clic en el Mazo de Robo.</p>
<p>Acción: Se roba una carta del Mazo.</p>
<p>Consecuencia: Robar una carta finaliza el turno del jugador.</p>
<ol start="3">
<li>Condición Especial: Mazo Vacío</li>
</ol>
<p>Si el Mazo de Robo se queda sin cartas y el jugador necesita robar, el sistema realiza una Reconstitución de Mazo:</p>
<p>La carta superior de la Pila de Descarte se mantiene.</p>
<p>El resto de las cartas de descarte se barajan y se utilizan para reconstruir el Mazo de Robo.</p>
<p>La Pila de Descarte queda con una sola carta (la que se mantuvo).</p>
</div></template>


