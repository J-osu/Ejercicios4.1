# Reglas y Flujo del Juego: "El Último Descarte"

Esta página explica el objetivo y las reglas de interacción del juego, que es la simulación del uso de estructuras de datos Pila (Stack).

**Objetivo del Juego**

Quedarse sin cartas en la mano.

**Flujo del Turno**

El juego comienza con el jugador con 7 cartas y una carta inicial en la Pila de Descarte.

## 1. Jugar una Carta

El jugador puede jugar una carta de su mano si se cumple la Regla de Coincidencia:

Coincidencia Válida: La carta seleccionada debe coincidir en Palo O en Valor con la carta que se encuentra en la cima de la Pila de Descarte.

Acción: Si la jugada es válida, la carta se mueve de tu mano a la Pila de Descarte.

### 2. Robar y Finalizar Turno

Si el jugador no tiene cartas jugables, o decide no jugar estratégicamente, debe hacer clic en el Mazo de Robo.

Acción: Se roba una carta del Mazo.

Consecuencia: Robar una carta finaliza el turno del jugador.

#### 3. Condición Especial: Mazo Vacío

Si el Mazo de Robo se queda sin cartas y el jugador necesita robar, el sistema realiza una Reconstitución de Mazo:

La carta superior de la Pila de Descarte se mantiene.

El resto de las cartas de descarte se barajan y se utilizan para reconstruir el Mazo de Robo.

La Pila de Descarte queda con una sola carta (la que se mantuvo).