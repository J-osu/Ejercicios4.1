# Clases Core y Modelado de Datos

El juego se construye sobre dos clases fundamentales: la estructura de datos genérica (Pila) y el modelo de negocio (Carta).

## 3.1 Clase Pila&lt;T&gt;

Implementa la estructura de datos Pila (Stack), esencial para simular la forma en que se roban y descartan las cartas (LIFO).

**Método:** push(elemento: T)
Descripción: Añade un elemento a la cima de la pila.

**Método: pop(): T
Descripción: undefined

**Método:** peek(): T
Descripción: undefined

**Método:** size(): number
Descripción: Devuelve el número de elementos restantes.

**Método:** getElementos(): T[]
Descripción: Devuelve una copia de todos los elementos (utilizado en la reconstitución del mazo).

### 3.2 Clase Carta

Esta clase modela la identidad y la regla de jugabilidad, siguiendo los principios de la Programación Orientada a Objetos (POO).

**Propiedad:** Método: palo: Palo
**Descripción:** Tipo de palo (Picas ♠️, Corazones ❤️, etc.).

**Propiedad:** Método: valor: Valor
**Descripción:** Valor de la carta (A, 2-10, J, Q, K).

**Propiedad** Método: esJugableSobre(otraCarta: Carta): boolean
**Descripción:** Regla Central: Devuelve true si la carta actual coincide en Palo O Valor con la carta de descarte.