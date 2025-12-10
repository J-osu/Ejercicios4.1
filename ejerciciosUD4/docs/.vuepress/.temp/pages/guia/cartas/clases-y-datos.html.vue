<template><div><h1 id="clases-core-y-modelado-de-datos" tabindex="-1"><a class="header-anchor" href="#clases-core-y-modelado-de-datos"><span>Clases Core y Modelado de Datos</span></a></h1>
<p>El juego se construye sobre dos clases fundamentales: la estructura de datos genérica (Pila) y el modelo de negocio (Carta).</p>
<h2 id="_3-1-clase-pila-t" tabindex="-1"><a class="header-anchor" href="#_3-1-clase-pila-t"><span>3.1 Clase Pila&lt;T&gt;</span></a></h2>
<p>Implementa la estructura de datos Pila (Stack), esencial para simular la forma en que se roban y descartan las cartas (LIFO).</p>
<p><strong>Método:</strong> push(elemento: T)
Descripción: Añade un elemento a la cima de la pila.</p>
<p>**Método: pop(): T
Descripción: undefined</p>
<p><strong>Método:</strong> peek(): T
Descripción: undefined</p>
<p><strong>Método:</strong> size(): number
Descripción: Devuelve el número de elementos restantes.</p>
<p><strong>Método:</strong> getElementos(): T[]
Descripción: Devuelve una copia de todos los elementos (utilizado en la reconstitución del mazo).</p>
<h3 id="_3-2-clase-carta" tabindex="-1"><a class="header-anchor" href="#_3-2-clase-carta"><span>3.2 Clase Carta</span></a></h3>
<p>Esta clase modela la identidad y la regla de jugabilidad, siguiendo los principios de la Programación Orientada a Objetos (POO).</p>
<p><strong>Propiedad:</strong> Método: palo: Palo
<strong>Descripción:</strong> Tipo de palo (Picas ♠️, Corazones ❤️, etc.).</p>
<p><strong>Propiedad:</strong> Método: valor: Valor
<strong>Descripción:</strong> Valor de la carta (A, 2-10, J, Q, K).</p>
<p><strong>Propiedad</strong> Método: esJugableSobre(otraCarta: Carta): boolean
<strong>Descripción:</strong> Regla Central: Devuelve true si la carta actual coincide en Palo O Valor con la carta de descarte.</p>
</div></template>


