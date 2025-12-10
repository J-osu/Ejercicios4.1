<template>
    <div class="cinema-manager">
        <h1 class="text-2xl font-bold mb-6 text-center text-indigo-400">
            Gestor Interactivo de Sala de Cine
        </h1>

        <!-- Layout: Left = Sala, Right = Panel de selección -->
        <div class="layout-grid">
            <div class="left-panel">
                <!-- Pantalla de Proyección -->
                <div class="screen-indicator">
                    <div class="screen-pill"></div>
                    <div class="screen-label">PANTALLA</div>
                </div>

                <!-- Mapa de Butacas (Grid Dinámico) -->
                <div :style="gridStyle" class="seating-grid">
                    <!-- Encabezado: esquina vacía + números de columna + esquina vacía -->
                    <div class="corner"></div>
                    <div v-for="col in colsArray" :key="'col-' + col" class="col-number">{{ col }}</div>
                    <div class="corner"></div>

                    <!-- Filas: etiqueta izquierda, butacas, etiqueta derecha -->
                    <template v-for="(fila, indexFila) in sala" :key="indexFila">
                        <div class="row-label">{{ String.fromCharCode(65 + indexFila) }}</div>
                        <div v-for="(butaca, indexColumna) in fila" :key="butaca.id"
                            :class="['butaca', baseButacaClasses, getButacaClass(butaca)]"
                            @click="seleccionarButaca(indexFila, indexColumna)"
                        >
                            {{ butaca.columna }}
                        </div>
                        <div class="row-label">{{ String.fromCharCode(65 + indexFila) }}</div>
                    </template>
                </div>
            </div>

            <aside class="right-panel">
                <div class="summary-panel">
                    <h2 class="text-xl font-semibold mb-3">Tu Selección</h2>

                    <p v-if="butacasSeleccionadas.length === 0" class="text-gray-400">
                        Selecciona tus asientos disponibles.
                    </p>
                    <div v-else>
                        <p class="mb-2">
                            Butacas seleccionadas: 
                            <span class="font-mono text-yellow-400">{{ selectedIds }}</span>
                        </p>
                        <p class="text-lg font-bold">
                            Total a Pagar: <span class="text-indigo-300">{{ totalAPagar.toFixed(2) }} €</span>
                        </p>
                    </div>

                    <button 
                        @click="confirmarReserva" 
                        :disabled="butacasSeleccionadas.length === 0"
                        class="btn-confirm mt-4"
                    >
                        Confirmar Reserva ({{ butacasSeleccionadas.length }} asientos)
                    </button>
                </div>

                <!-- Leyenda -->
                <div class="legend">
                    <div class="legend-row"><div class="legend-box bg-gray-600"></div> Disponible</div>
                    <div class="legend-row"><div class="legend-box bg-yellow-500"></div> Seleccionada</div>
                    <div class="legend-row"><div class="legend-box bg-red-800"></div> Ocupada</div>
                    <div class="legend-row"><div class="legend-box bg-red-400"></div> No disponible</div>
                </div>
            </aside>
        </div>

        
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { EstadoButaca } from '@/types/cinema';
import type { IButaca } from '@/interface/IButaca';


// --- Props (para configurar la sala desde fuera) ---
const props = defineProps({
    filas: { type: Number, required: true },
    columnas: { type: Number, required: true },
    precioPorButaca: { type: Number, default: 8 },
});

// Función para crear el estado inicial de la sala (matriz IButaca[][])
function inicializarSala(): IButaca[][] {
    const nuevaSala: IButaca[][] = [];
    
    for (let f = 1; f <= props.filas; f++) {
        const fila: IButaca[] = [];
        for (let c = 1; c <= props.columnas; c++) {
            
            // Asignar estado aleatorio para simular ocupación o daño inicial
            let estado = EstadoButaca.DISPONIBLE;
            const rand = Math.random();

            if (rand < 0.1) { // 10% de probabilidad de estar Ocupado inicialmente
                estado = EstadoButaca.OCUPADO;
            } else if (rand < 0.15 && f > 2) { // 5% de probabilidad de estar Dañado (solo en filas traseras)
                 estado = EstadoButaca.DANADO;
            }
            
            fila.push({
                id: `F${f}-C${c}`,
                fila: f,
                columna: c,
                estado: estado,
            });
        }
        nuevaSala.push(fila);
    }
    return nuevaSala;
}

// --- Estado Reactivo ---
const sala = ref<IButaca[][]>(inicializarSala());

// Clases base para las butacas (se combinan con las de estado)
const baseButacaClasses = 'h-10 flex items-center justify-center text-xs font-semibold rounded-md shadow-sm transition-all duration-150 ease-in-out cursor-pointer';


// --- Propiedades Computadas ---

// 1. Estilo Grid Dinámico para CSS
const colsArray = computed(() => Array.from({ length: props.columnas }, (_, i) => i + 1));
// (rowsArray not needed)

const gridStyle = computed(() => {
    // Definimos columnas: esquina + columnas fijas + esquina
    const seatSize = 44; // px
    return {
        gridTemplateColumns: `auto repeat(${props.columnas}, ${seatSize}px) auto`,
        gridTemplateRows: `auto repeat(${props.filas}, ${seatSize}px)`,
        gap: '12px',
        justifyContent: 'center',
    } as Record<string, string>;
});

// 2. Butacas Seleccionadas (Lista plana)
const butacasSeleccionadas = computed(() => {
    return sala.value.flat().filter(butaca => butaca.estado === EstadoButaca.SELECCIONADO);
});

// IDs seleccionadas (cadena para mostrar en el template)
const selectedIds = computed(() => butacasSeleccionadas.value.map(b => b.id).join(', '));

// 3. Cálculo del Total a Pagar
const totalAPagar = computed(() => {
    return butacasSeleccionadas.value.length * props.precioPorButaca;
});


// --- Lógica de Interacción ---

/**
 * Maneja el clic en una butaca para alternar entre DISPONIBLE y SELECCIONADO.
 * @param filaIndex Índice de la fila (0-basado)
 * @param columnaIndex Índice de la columna (0-basado)
 */
function seleccionarButaca(filaIndex: number, columnaIndex: number): void {
    const butaca = sala.value[filaIndex]?.[columnaIndex];
    if (!butaca) return;

    switch (butaca.estado) {
        case EstadoButaca.DISPONIBLE:
            // 1. DISPONIBLE -> SELECCIONADO
            butaca.estado = EstadoButaca.SELECCIONADO;
            break;

        case EstadoButaca.SELECCIONADO:
            // 2. SELECCIONADO -> DISPONIBLE
            butaca.estado = EstadoButaca.DISPONIBLE;
            break;

        case EstadoButaca.OCUPADO:
        case EstadoButaca.DANADO:
            // 3. Impedir selección. Notificación silenciosa o mensaje
            console.log(`Butaca ${butaca.id} no está disponible (${butaca.estado}).`);
            break;
    }
}

/**
 * Confirma la reserva, cambiando todas las butacas seleccionadas a OCUPADO.
 */
function confirmarReserva(): void {
    if (butacasSeleccionadas.value.length === 0) return;

    // Simular la confirmación de la transacción y actualizar la matriz
    sala.value = sala.value.map(fila => 
        fila.map(butaca => {
            if (butaca.estado === EstadoButaca.SELECCIONADO) {
                // Cambia SELECCIONADO a OCUPADO
                return { ...butaca, estado: EstadoButaca.OCUPADO };
            }
            // Mantiene el estado de las demás butacas (DISPONIBLE, OCUPADO, DAÑADO)
            return butaca;
        })
    );

    alert(`¡Reserva confirmada! Total pagado: ${totalAPagar.value.toFixed(2)} €.`);
}

/**
 * Devuelve las clases CSS dinámicas basadas en el estado de la butaca.
 * @param butaca El objeto butaca.
 */
function getButacaClass(butaca: IButaca): string {
    switch (butaca.estado) {
        case EstadoButaca.DISPONIBLE:
            return 'bg-gray-600 hover:bg-green-500 text-white';
        case EstadoButaca.SELECCIONADO:
            return 'bg-yellow-500 text-black border-2 border-yellow-300 transform scale-105';
        case EstadoButaca.OCUPADO:
            return 'bg-red-800 text-gray-300 opacity-70 cursor-not-allowed';
        case EstadoButaca.DANADO:
            return 'bg-red-400 text-gray-800 line-through cursor-not-allowed';
        default:
            return 'bg-gray-500';
    }
}

</script>

<style scoped>
/* Estilos generales para el layout */
.cinema-manager {
    background-color: #1a1a2e; /* Fondo oscuro */
    padding: 30px;
    border-radius: 12px;
    color: #f0f0f0;
    max-width: 900px;
    margin: 20px auto;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    font-family: 'Inter', sans-serif;
}

/* Panel de Resumen */
.summary-panel {
    background-color: #272741;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    border-left: 5px solid #6366f1; /* Borde de acento */
}

/* Indicador de Pantalla */
.screen-indicator {
    width: 100%;
    margin: 0 0 18px 0;
    padding: 6px 10px 18px 10px;
    background-color: transparent;
    border-radius: 5px;
    text-align: center;
    position: relative;
}

.screen-indicator .screen-pill{
    height: 14px;
    width: 80%;
    background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.16), rgba(255,255,255,0.06));
    margin: 6px auto 0 auto;
    border-radius: 999px;
    box-shadow: 0 6px 18px rgba(99,102,241,0.18);
}
.screen-indicator .screen-label{
    margin-top: 6px;
    color: #9ca3ff;
    font-size: 0.9rem;
    letter-spacing: 2px;
}

/* Grid del Mapa de Butacas */
.seating-grid {
    display: grid;
    padding: 18px 24px;
    background-color: #241a2b;
    border-radius: 10px;
    align-items: center;
    justify-items: center;
}

.col-number {
    color: #bdb7d9;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.corner { height: 1px; }

.butaca {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
}

.layout-grid{ display: grid; grid-template-columns: 1fr 320px; gap: 24px; align-items: start; }
/* layout panels - no extra rules */
.summary-panel{ margin-bottom: 20px; }
.legend{ background: #2b2130; padding: 14px; border-radius: 10px; color: #cfc6dd }
.legend-row{ display:flex; gap:10px; align-items:center; padding:6px 0 }
.legend-box{ width:18px; height:18px; border-radius:6px }

/* Etiqueta de Fila (Primera columna) */
.row-label {
    background-color: transparent;
    color: #6366f1; 
    font-weight: bold;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    padding-right: 5px;
}

/* Botón de Confirmación */
.btn-confirm {
    background-color: #6366f1;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    transition: background-color 0.3s;
}
.btn-confirm:hover:not(:disabled) {
    background-color: #4f46e5;
}
.btn-confirm:disabled {
    background-color: #4b5563;
    cursor: not-allowed;
    opacity: 0.7;
}

/* Tailwind-like classes used: */
.h-10 { height: 40px; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.text-xs { font-size: 0.75rem; }
.font-semibold { font-weight: 600; }
.text-white { color: #fff; }
.text-black { color: #000; }
.rounded-md { border-radius: 0.375rem; }
.shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
</style>