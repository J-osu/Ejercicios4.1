<template><div><h1 id="arquitectura-y-diseno-del-sistema" tabindex="-1"><a class="header-anchor" href="#arquitectura-y-diseno-del-sistema"><span>Arquitectura y Diseno del Sistema</span></a></h1>
<p>El simulador sigue una estructura limpia de separación de responsabilidades (SoC), utilizando la Composition API para aislar la lógica del juego del componente visual.</p>
<h2 id="componentes-principales" tabindex="-1"><a class="header-anchor" href="#componentes-principales"><span>Componentes Principales</span></a></h2>
<p>Modulo: Pila.ts
Tipo: Clase (Estructura de Datos)
Propósito: El núcleo del sistema. Implementa la Pila LIFO (Last-In, First-Out) para el Mazo y el Descarte.</p>
<p>Modulo: Carta.ts
Tipo: Clase (POO)
Propósito: Modela las cartas, contiene la identidad (palo, valor) y la regla de juego (esJugableSobre).</p>
<p>Modulo: useJuego.ts
Tipo: Composable (Composition API)
Propósito: Centraliza todo el Estado Reactivo (ref, computed) y las Funciones de Juego (robarCarta, jugarCarta)</p>
<p>Modulo: JuegoCartas.vue
Tipo: Componente (UI)
Propósito: Proporciona la interfaz visual que consume el estado expuesto por el Composable.</p>
<h3 id="flujo-de-datos" tabindex="-1"><a class="header-anchor" href="#flujo-de-datos"><span>Flujo de Datos</span></a></h3>
<p>El componente Vue se comunica exclusivamente con el Composable useJuego, que a su vez gestiona las instancias de las clases Pila y Carta. Esto asegura un flujo de datos unidireccional y facil de depurar.</p>
</div></template>


