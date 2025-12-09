<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useJuego } from '@/composables/useJuego';

export default defineComponent({
    setup() {
        const juego = useJuego();

        onMounted(() => {
            // Inicia el juego si todavía no hay carta en el descarte
            if (!juego.cartaSuperiorDescarte.value) {
                juego.iniciarJuego();
            }
        });
        return { ...juego };
    }
});
</script>

<template>
    <div class="tablero-container">
        <h1 class="text-center mb-4">El Último Descarte (Simulador Pila)</h1>

        <!-- Mensajes y Estado -->
        <div :class="{'alert-success': juegoFinalizado}" class="mensaje-box">
            <p class="mb-0">{{ mensaje }}</p>
        </div>

        <div v-if="cartaSuperiorDescarte" class="tablero">
            <!-- Zona de Mazo y Descarte (Pilas) -->
            <div class="pilas-zona">
                
                <!-- DECK PILE (MAZO DE ROBO) -->
                <div 
                    class="mazo-pila" 
                    @click="robarCarta"
                    :class="{'mazo-vacio': cartasRestantesMazo === 0, 'glow-robar': !hayJugadaValida && !juegoFinalizado}"
                >
                    <div class="carta carta-reverso">
                        <span v-if="cartasRestantesMazo > 0">
                            {{ cartasRestantesMazo }} cartas
                        </span>
                        <span v-else>
                            ¡Mazo Vacío!
                        </span>
                    </div>
                    <button :disabled="juegoFinalizado" class="btn-robar">
                        Robar Carta (Fin de Turno)
                    </button>
                </div>

                <!-- DISCARD PILE (DESCARTE) -->
                <div class="descarte-pila">
                    <h3>Descarte</h3>
                    <div class="carta descarte-cima">
                        <span>
                            {{ cartaSuperiorDescarte.nombre }}
                        </span>
                    </div>
                </div>

            </div>

            <!-- Player's Hand Zone (Mano del Jugador) -->
            <div class="mano-jugador-zona">
                <h3>Tu Mano ({{ cartasManoJugador.length }} cartas)</h3>
                <div class="mano-cartas">
                    <div 
                        v-for="carta in cartasManoJugador" 
                        :key="carta.id" 
                        @click="jugarCarta(carta)"
                        :class="{'carta-jugable': esJugable(carta), 'carta-no-jugable': !esJugable(carta) && !juegoFinalizado}"
                        class="carta"
                    >
                        {{ carta.nombre }}
                    </div>
                </div>
            </div>

            <button v-if="juegoFinalizado" @click="iniciarJuego" class="btn-reiniciar">
                ¡Jugar de Nuevo!
            </button>
        </div>
        <button v-else @click="iniciarJuego" class="btn-reiniciar">
            Iniciar Juego (Barajar 52 Cartas)
        </button>
    </div>
</template>

<style scoped>
.tablero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Inter', sans-serif;
    background-color: #0A192F;
    color: #F8F8F8;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.text-center { text-align: center; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-0 { margin-bottom: 0; }

.tablero {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.mensaje-box {
    padding: 15px;
    border-radius: 8px;
    background-color: #30475E;
    color: #FFFFFF;
    text-align: center;
    min-height: 40px;
    font-size: 1.1em;
}
.alert-success {
    background-color: #4CAF50;
    color: #0A192F;
    font-weight: bold;
    font-size: 1.3em;
}

.pilas-zona {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    min-height: 200px;
    align-items: flex-start;
}

.mazo-pila, .descarte-pila {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.mazo-pila {
    cursor: pointer;
    position: relative;
}

.carta {
    width: 100px;
    height: 150px;
    border-radius: 8px;
    border: 1px solid #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 1em;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    transition: transform 0.1s;
    cursor: default;
}

.carta-reverso {
    background-color: #FF5722;
    color: #0A192F;
    text-shadow: 1px 1px 0 #FFFFFF;
    border: 3px solid #0A192F;
    font-size: 0.9em;
}
.mazo-vacio {
    opacity: 0.5;
    pointer-events: none;
}
.glow-robar {
    animation: glow 1.5s infinite alternate;
}

.descarte-cima {
    background-color: #FFFFFF;
    color: #0A192F;
    border: 3px solid #FF5722;
    white-space: pre-wrap;
}

.btn-robar {
    background-color: #FF5722;
    color: #0A192F;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;
    margin-top: 10px;
}
.btn-robar:hover {
    background-color: #FF9800;
}


.mano-jugador-zona {
    text-align: center;
}

.mano-cartas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    min-height: 170px;
}

.mano-cartas .carta {
    background-color: #FFFFFF;
    color: #0A192F;
}

.carta-jugable {
    border: 3px solid #4CAF50;
    box-shadow: 0 0 10px #4CAF50;
    cursor: pointer;
}

.carta-no-jugable {
    opacity: 0.7;
    cursor: default;
}

.carta-jugable:hover {
    transform: translateY(-15px) scale(1.08);
    z-index: 10;
    box-shadow: 0 10px 15px rgba(76, 175, 80, 0.7);
}

.btn-reiniciar {
    background-color: #00BFFF;
    color: #0A192F;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;
    margin-top: 20px;
    align-self: center;
    font-size: 1.1em;
}

@keyframes glow {
    from { box-shadow: 0 0 5px #FF5722; }
    to { box-shadow: 0 0 20px #FF9800; }
}
</style>