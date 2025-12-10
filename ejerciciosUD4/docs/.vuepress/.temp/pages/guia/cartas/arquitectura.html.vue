<template><div><h1 id="arquitectura-y-diseno-del-sistema" tabindex="-1"><a class="header-anchor" href="#arquitectura-y-diseno-del-sistema"><span>Arquitectura y Diseno del Sistema</span></a></h1>
<p>El simulador sigue una estructura limpia de separación de responsabilidades (SoC), utilizando la Composition API para aislar la lógica del juego del componente visual.</p>
<h2 id="componentes-principales" tabindex="-1"><a class="header-anchor" href="#componentes-principales"><span>Componentes Principales</span></a></h2>
<p><strong>Modulo:</strong> Pila.ts
<strong>Tipo:</strong> Clase (Estructura de Datos)
<strong>Propósito:</strong> El núcleo del sistema. Implementa la Pila LIFO (Last-In, First-Out) para el Mazo y el Descarte.</p>
<p><strong>Modulo:</strong> Carta.ts
<strong>Tipo:</strong> Clase (POO)
<strong>Propósito:</strong> Modela las cartas, contiene la identidad (palo, valor) y la regla de juego (esJugableSobre).</p>
<p><strong>Modulo</strong>: useJuego.ts
<strong>Tipo:</strong> Composable (Composition API)
<strong>Propósito:</strong> Centraliza todo el Estado Reactivo (ref, computed) y las Funciones de Juego (robarCarta, jugarCarta)</p>
<p><strong>Modulo:</strong> JuegoCartas.vue
<strong>Tipo:</strong> Componente (UI)
<strong>Propósito:</strong> Proporciona la interfaz visual que consume el estado expuesto por el Composable.</p>
<h3 id="flujo-de-datos" tabindex="-1"><a class="header-anchor" href="#flujo-de-datos"><span>Flujo de Datos</span></a></h3>
<p>El componente Vue se comunica exclusivamente con el Composable useJuego, que a su vez gestiona las instancias de las clases Pila y Carta. Esto asegura un flujo de datos unidireccional y facil de depurar.</p>
</div></template>


