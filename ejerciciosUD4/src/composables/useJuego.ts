import { ref, readonly, computed } from 'vue';
import { Pila } from '@/core/Pila'; // Importamos la Pila
import { Carta } from '@/core/Carta'; // Importamos la Carta
import type { Palo } from '@/types/cards';
import type { Valor } from '@/types/cards';

// Definición de todos los palos y valores estándar para crear la baraja
const PALOS: Palo[] = ['Picas ♠️', 'Corazones ❤️', 'Tréboles ♣️', 'Diamantes ♦️'];
const VALORES: Valor[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const CARTAS_INICIALES_JUGADOR = 7;
const TOTAL_CARTAS = 52;


// Función pura para barajar un array (Algoritmo Fisher-Yates)
function barajar<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function useJuego() {
    // Estado reactivo central del juego
    const mazo = ref(new Pila<Carta>());
    const descarte = ref(new Pila<Carta>());
    const manoJugador = ref<Carta[]>([]);
    const mensaje = ref<string>('¡Haz clic en Iniciar Juego!');
    const juegoFinalizado = ref(false);

    /**
     * Crea y baraja una baraja estándar de 52 cartas.
     * @returns {Carta[]} La baraja barajada.
     */
    function crearYBarajarBaraja(): Carta[] {
        const baraja: Carta[] = [];
        for (const palo of PALOS) {
            for (const valor of VALORES) {
                baraja.push(new Carta(palo, valor));
            }
        }
        return barajar(baraja);
    }

    /**
     * Inicia el juego: crea la baraja, reparte cartas y establece el descarte inicial.
     */
    function iniciarJuego() {
        // 1. Crear y Barajar (usando un array temporal)
        const barajaBarajada = crearYBarajarBaraja();
        
        // Limpiar pilas y manos antes de empezar
        mazo.value = new Pila<Carta>();
        descarte.value = new Pila<Carta>();
        manoJugador.value = [];
        juegoFinalizado.value = false;

        // 2. Llenar la Pila `mazo`
        for (const carta of barajaBarajada) {
            mazo.value.push(carta);
        }
        
        // 3. Repartir 7 cartas al jugador
        for (let i = 0; i < CARTAS_INICIALES_JUGADOR; i++) {
            const carta = mazo.value.pop();
            if (carta) manoJugador.value.push(carta);
        }

        // 4. Mover una carta de `mazo` a `descarte` para iniciar el juego
        let cartaInicialDescarte = mazo.value.pop();
        // Asegurarse de que no sea null antes de pushear
        while (!cartaInicialDescarte) {
            cartaInicialDescarte = mazo.value.pop();
        }
        if (cartaInicialDescarte) {
            descarte.value.push(cartaInicialDescarte);
        }
        
        mensaje.value = 'Juego iniciado. ¡Es tu turno!';
        console.log('Juego Iniciado. Mazo restante:', mazo.value.size());
    }

    /**
     * Reconstituye el mazo si se queda vacío, barajando la pila de descarte.
     */
    function reconstituirMazo() {
        const descarteElementos = descarte.value.getElementos();
        
        // 1. Tomar la carta superior del descarte (la última)
        const cartaSuperior = descarte.value.pop(); 
        if (!cartaSuperior) {
            // Error crítico, no debería ocurrir si el juego está en curso
            mensaje.value = 'ERROR: No se pudo reconstituir el mazo.';
            return;
        }

        // 2. Tomar el resto de cartas de descarte (todo menos la última)
        const cartasParaRebarajar = descarteElementos.slice(0, descarteElementos.length - 1);
        
        // 3. Barajar y rellenar el mazo
        const nuevoMazoBarajado = barajar(cartasParaRebarajar);
        mazo.value = new Pila<Carta>(); // Limpiamos y creamos una nueva pila
        for (const carta of nuevoMazoBarajado) {
            mazo.value.push(carta);
        }

        // 4. Dejar solo la carta superior en la pila de descarte
        descarte.value = new Pila<Carta>();
        descarte.value.push(cartaSuperior);
        
        mensaje.value = `¡Mazo reconstituido! Cartas rebarajadas: ${nuevoMazoBarajado.length}. Roba una carta.`;
    }

    /**
     * El jugador roba una carta del mazo.
     */
    function robarCarta() {
        if (juegoFinalizado.value) return;

        // 1. Si el mazo está vacío, reconstituir
        if (mazo.value.isEmpty()) {
            reconstituirMazo();
            // Si el mazo sigue vacío después de reconstituir (sólo 1 carta en juego), el juego puede continuar sin robar.
            if (mazo.value.isEmpty()) {
                 mensaje.value = '¡Mazo vacío y reconstituido! No hay más cartas para robar.';
                 return;
            }
        }
        
        // 2. Robar y añadir a la mano
        const carta = mazo.value.pop();
        if (carta) {
            manoJugador.value.push(carta);
            mensaje.value = `Has robado el ${carta.nombre}. Turno terminado.`;
        }
    }

    /**
     * El jugador intenta jugar una carta de su mano.
     * @param cartaAJuagar La carta de la mano del jugador seleccionada.
     */
    function jugarCarta(cartaAJuagar: Carta) {
        if (juegoFinalizado.value) return;

        const cartaSuperior = descarte.value.peek();
        
        // 1. Comprobar si hay descarte y si la carta es jugable
        if (cartaSuperior && cartaAJuagar.esJugableSobre(cartaSuperior)) {
            
            // 2. Quitar de la mano
            const index = manoJugador.value.findIndex(c => c.id === cartaAJuagar.id);
            if (index > -1) {
                manoJugador.value.splice(index, 1);
            }
            
            // 3. Añadir al descarte (Pila)
            descarte.value.push(cartaAJuagar);
            
            mensaje.value = `¡Jugaste el ${cartaAJuagar.nombre}!`;

            // 4. Comprobar condición de victoria
            if (manoJugador.value.length === 0) {
                juegoFinalizado.value = true;
                mensaje.value = '¡Felicidades! ¡Te has quedado sin cartas y has ganado el juego!';
            }
        } else {
            mensaje.value = `Movimiento no válido. El ${cartaAJuagar.nombre} no coincide con el ${cartaSuperior?.nombre || 'Error'}.`;
        }
    }

    // Estado reactivo expuesto
    const cartasManoJugador = readonly(manoJugador);
    const cartaSuperiorDescarte = computed(() => descarte.value.peek());
    const cartasRestantesMazo = computed(() => mazo.value.size());
    const esJugable = (carta: Carta) => cartaSuperiorDescarte.value?.esJugableSobre(carta) || false;
    
    // Función para detectar si hay al menos una jugada válida en la mano (para UX)
    const hayJugadaValida = computed(() => {
        const cartaSuperior = cartaSuperiorDescarte.value;
        if (!cartaSuperior) return false;
        
        return manoJugador.value.some(carta => carta.esJugableSobre(cartaSuperior));
    });


    return {
        // Acciones
        iniciarJuego,
        robarCarta,
        jugarCarta,
        
        // Estado de solo lectura
        cartasManoJugador,
        cartaSuperiorDescarte,
        cartasRestantesMazo,
        mensaje: readonly(mensaje),
        juegoFinalizado: readonly(juegoFinalizado),
        
        // Utilidades de juego
        esJugable,
        hayJugadaValida
    };
}