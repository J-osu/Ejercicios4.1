<template><div><p>Clases Core y Modelado de Datos</p>
<p>El juego se construye sobre dos clases fundamentales: la estructura de datos genérica (Pila) y el modelo de negocio (Carta).</p>
<p>3.1 Clase Pila</p>
<p>Implementa la estructura de datos Pila (Stack), esencial para simular la forma en que se roban y descartan las cartas (LIFO).</p>
<p>Método: push(elemento: T)
Descripción: Añade un elemento a la cima de la pila.</p>
<p>Método: pop(): T
Descripción: undefined</p>
<p>Método: peek(): T
Descripción: undefined</p>
<p>Método: size(): number
Descripción: Devuelve el número de elementos restantes.</p>
<p>Método: getElementos(): T[]
Descripción: Devuelve una copia de todos los elementos (utilizado en la reconstitución del mazo).</p>
<p>3.2 Clase Carta</p>
<p>Esta clase modela la identidad y la regla de jugabilidad, siguiendo los principios de la Programación Orientada a Objetos (POO).</p>
<p>Propiedad / Método: palo: Palo
Descripción: Tipo de palo (Picas ♠️, Corazones ❤️, etc.).</p>
<p>Propiedad / Método: valor: Valor
Descripción: Valor de la carta (A, 2-10, J, Q, K).</p>
<p>Propiedad / Método: esJugableSobre(otraCarta: Carta): boolean
Descripción: Regla Central: Devuelve true si la carta actual coincide en Palo O Valor con la carta de descarte.</p>
</div></template>


