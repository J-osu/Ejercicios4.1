<template>
  <div class="gestor-container">
    <h2>Gestión de Horarios</h2>

    <div class="classroom-selector">
      <label for="classroom-select">Seleccionar Aula:</label>
      <select id="classroom-select" v-model="idAulaSeleccionada">
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
          <tr v-for="(horarioDia, indiceDia) in horarioActual" :key="indiceDia">
            <td class="day-header">
              **{{ DIAS_SEMANA[indiceDia] }}**
            </td>

            <td
              v-for="(datosBloque, indiceBloque) in horarioDia"
              :key="indiceBloque"
              :class="['schedule-slot', { 'occupied': !!datosBloque, 'free': !datosBloque }]"
              @click="abrirModal(indiceDia, indiceBloque, datosBloque)"
            >
              <template v-if="datosBloque">
                <span class="subject">{{ datosBloque.nombre }}</span>
                <br>
                <small class="teacher">{{ datosBloque.profesor }}</small>
                <br>
                <small class="group">({{ datosBloque.grupo }})</small>
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
      :es-visible="esModalVisible"
      :reserva="slotEditando?.reserva || null"
      :nombre-dia="DIAS_SEMANA[slotEditando?.indiceDia || 0]"
      :hora-bloque="BLOQUES_HORARIOS[slotEditando?.indiceBloque || 0]"
      @guardar="manejarGuardar"
      @eliminar="manejarEliminar"
      @cerrar="cerrarModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Aula, BloqueHorario, Asignatura } from '@/types/schedule';
import { aulas, DIAS_SEMANA, BLOQUES_HORARIOS } from '@/data/schedule';
import ModalReserva from './ModalReserva.vue';

const idAulaSeleccionada = ref<string>('');
const esModalVisible = ref(false);

interface SlotEditando {
    indiceDia: number;
    indiceBloque: number;
    reserva: BloqueHorario;
}
const slotEditando = ref<SlotEditando | null>(null);

const aulaActual = computed<Aula | undefined>(() => {
  return aulas.find(a => a.id === idAulaSeleccionada.value);
});

const horarioActual = computed<BloqueHorario[][]>(() => {
  return aulaActual.value?.horario || [];
});

const abrirModal = (indiceDia: number, indiceBloque: number, datosBloque: BloqueHorario) => {
    slotEditando.value = { indiceDia, indiceBloque, reserva: datosBloque };
    esModalVisible.value = true;
};

const cerrarModal = () => {
    esModalVisible.value = false;
    slotEditando.value = null;
};

const manejarGuardar = (datosReserva: Asignatura) => {
    if (!slotEditando.value || !aulaActual.value) return;

    const { indiceDia, indiceBloque } = slotEditando.value;

    const horario = aulaActual.value.horario;
    horario[indiceDia][indiceBloque] = datosReserva;

    cerrarModal();
};

const manejarEliminar = () => {
    if (!slotEditando.value || !aulaActual.value) return;

    const { indiceDia, indiceBloque } = slotEditando.value;
    aulaActual.value.horario[indiceDia][indiceBloque] = null;

    cerrarModal();
};

onMounted(() => {
    if (aulas.length > 0) {
        idAulaSeleccionada.value = aulas[0].id;
    }
});
</script>

<style scoped>
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

.occupied {
  background-color: #ffe0b2;
  color: #333;
}

.free {
  background-color: #e8f5e9;
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