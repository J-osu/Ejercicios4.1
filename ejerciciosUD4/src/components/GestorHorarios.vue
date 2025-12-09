<template>
  <div class="gestor-container">
    <h2>🏫 Gestión de Horarios de Aulas</h2>

    <div class="classroom-selector">
      <label for="classroom-select">Seleccionar Aula:</label>
      <select id="classroom-select" v-model="selectedClassroomId">
        <option v-for="aula in aulas" :key="aula.id" :value="aula.id">
          {{ aula.nombre }}
        </option>
      </select>
    </div>

    <hr>

    <div class="schedule-grid">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Día/Hora</th>
            <th v-for="slot in BLOQUES_HORARIOS" :key="slot">{{ slot }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(daySchedule, dayIndex) in currentHorario" :key="dayIndex">
            <td class="day-header">
              **{{ DIAS_SEMANA[dayIndex] }}**
            </td>

            <td
              v-for="(slotData, slotIndex) in daySchedule"
              :key="slotIndex"
              :class="['schedule-slot', { 'occupied': !!slotData, 'free': !slotData }]"
              @click="openModal(dayIndex, slotIndex, slotData)"
            >
              <template v-if="slotData">
                <span class="subject">{{ slotData.nombre }}</span>
                <br>
                <small class="teacher">{{ slotData.profesor }}</small>
                <br>
                <small class="group">({{ slotData.grupo }})</small>
              </template>
              <template v-else>
                Libre
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ModalReserva
      :is-visible="isModalVisible"
      :reserva="editingSlot?.reserva || null"
      :dia-nombre="DIAS_SEMANA[editingSlot?.dayIndex || 0]"
      :bloque-hora="BLOQUES_HORARIOS[editingSlot?.slotIndex || 0]"
      @save="handleSave"
      @delete="handleDelete"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Aula, BloqueHorario, Asignatura } from '@/types/schedule';
import { aulas, DIAS_SEMANA, BLOQUES_HORARIOS } from '@/data/schedule';
import ModalReserva from './ModalReserva.vue';

// --- Estado ---
const selectedClassroomId = ref<string>('');
const isModalVisible = ref(false);

interface EditingSlot {
    dayIndex: number;
    slotIndex: number;
    reserva: BloqueHorario;
}
const editingSlot = ref<EditingSlot | null>(null);

// --- Propiedades Computadas ---
/**
 * Devuelve el objeto Aula actualmente seleccionado.
 */
const currentAula = computed<Aula | undefined>(() => {
  return aulas.find(a => a.id === selectedClassroomId.value);
});

/**
 * Devuelve la matriz de horario del aula actual (HorarioAula).
 */
const currentHorario = computed<BloqueHorario[][]>(() => {
  return currentAula.value?.horario || [];
});

// --- Métodos de Gestión ---

/**
 * Muestra el modal para Crear o Modificar.
 * @param dayIndex Índice de la fila (Día).
 * @param slotIndex Índice de la columna (Bloque).
 * @param slotData Datos de la reserva o null.
 */
const openModal = (dayIndex: number, slotIndex: number, slotData: BloqueHorario) => {
    // 1. Guarda las coordenadas y datos del bloque para el CRUD.
    editingSlot.value = { dayIndex, slotIndex, reserva: slotData };
    // 2. Muestra el modal.
    isModalVisible.value = true;
};

const closeModal = () => {
    isModalVisible.value = false;
    editingSlot.value = null;
};

/**
 * Maneja la acción 'save' del modal (Crear/Actualizar).
 * Modifica directamente la matriz del horario.
 */
const handleSave = (reservaData: Asignatura) => {
    if (!editingSlot.value || !currentAula.value) return;

    const { dayIndex, slotIndex } = editingSlot.value;

    // Modificar la matriz del aula actual
    const horario = currentAula.value.horario;

    // Actualizar la celda de la matriz (la reactividad de Vue 3 maneja esto bien)
    horario[dayIndex][slotIndex] = reservaData;

    closeModal();
};

/**
 * Maneja la acción 'delete' del modal (Eliminar).
 * Asigna 'null' al bloque de la matriz.
 */
const handleDelete = () => {
    if (!editingSlot.value || !currentAula.value) return;

    const { dayIndex, slotIndex } = editingSlot.value;

    // Asignar null a la celda para liberar el bloque
    currentAula.value.horario[dayIndex][slotIndex] = null;

    closeModal();
};

// --- Ciclo de Vida ---
onMounted(() => {
    // Establecer la primera aula como seleccionada al cargar la app
    if (aulas.length > 0) {
        selectedClassroomId.value = aulas[0].id;
    }
});
</script>

<style scoped>
/* Estilos generales */
.gestor-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.classroom-selector {
  margin-bottom: 25px;
}

.classroom-selector select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-left: 10px;
}

/* Estilos de la Cuadrícula (Matriz) */
.schedule-grid {
  overflow-x: auto;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.schedule-table th, .schedule-table td {
  border: 1px solid #eee;
  padding: 12px 8px;
  min-width: 120px;
}

.schedule-table th {
  background-color: #f8f9fa;
  color: #343a40;
}

.day-header {
  background-color: #e9ecef;
  font-weight: 600;
  color: #495057;
  min-width: 80px !important;
}

.schedule-slot {
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  height: 80px;
  vertical-align: top;
}

.schedule-slot:hover {
  opacity: 0.9;
}

/* Estilos de estado */
.occupied {
  background-color: #ffe0b2; /* Naranja pastel */
  color: #333;
}

.free {
  background-color: #e8f5e9; /* Verde pastel */
  color: #6a6a6a;
  font-style: italic;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subject {
    font-weight: bold;
    color: #007bff;
    display: block;
    margin-bottom: 2px;
}

.teacher, .group {
    font-size: 0.8em;
    color: #6c757d;
}
</style>