Estado Reactivo con useJuego.ts

El Composable useJuego centraliza toda la lógica y expone el estado del juego como propiedades de solo lectura para que el componente JuegoCartas.vue pueda reaccionar a los cambios sin mutar el estado directamente.

4.1 Estado Reactivo Expuesto

Todas las propiedades están marcadas como readonly para mantener la integridad del estado.

Nombre del Estado: cartasManoJugador
Tipo: readonly<Carta[]>
Propósito: La lista de cartas que el jugador tiene actualmente.

Nombre del Estado: cartaSuperiorDescarte
Tipo: Computed<Carta
Propósito: undefined>

Nombre del Estado: cartasRestantesMazo
Tipo: Computed<number>
Propósito: El número de cartas que quedan en la pila de robo.

Nombre del Estado: mensaje
Tipo: readonly<string>
Propósito: El feedback de texto para el usuario (victoria, error de jugada, robo).

Nombre del Estado: juegoFinalizado
Tipo: readonly<boolean>
Propósito: Indicador de victoria (true si la mano está vacía).

Nombre del Estado: hayJugadaValida
Tipo: Computed<boolean>
Propósito: UX Clave: true si existe alguna carta en la mano que se pueda jugar. (Utilizado para hacer brillar el mazo de robo).