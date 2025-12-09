<template>
  <div v-if="esVisible" class="modal-overlay" @click.self="$emit('cerrar')">
    <div class="modal-content">
      {{ estaEditando ? 'Editar Reserva' : 'Nueva Reserva' }}

      <p>
        **Bloque:** {{ nombreDia }} ({{ horaBloque }})
      </p>

      <form @submit.prevent="guardarReserva">
        <label for="asignatura">Asignatura:</label>
        <input id="asignatura" type="text" v-model="reservaLocal.nombre" required>

        <label for="profesor">Profesor:</label>
        <input id="profesor" type="text" v-model="reservaLocal.profesor" required>

        <label for="grupo">Grupo/Curso:</label>
        <input id="grupo" type="text" v-model="reservaLocal.grupo" required>

        <div class="modal-actions">
          <button type="submit" class="btn-primary">
            {{ estaEditando ? 'Guardar Cambios' : 'Crear Reserva' }}
          </button>

          <button v-if="estaEditando" type="button" @click="eliminarReserva" class="btn-danger">
            Eliminar Reserva
          </button>

          <button type="button" @click="$emit('cerrar')" class="btn-secondary">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { Asignatura } from '@/types/schedule';
import type { BloqueHorario } from '@/types/schedule';

const props = defineProps<{
  esVisible: boolean;
  reserva: BloqueHorario;
  nombreDia: string;
  horaBloque: string;
}>();

const emit = defineEmits(['guardar', 'eliminar', 'cerrar']);
const reservaVacia: Asignatura = { nombre: '', profesor: '', grupo: '' };
const reservaLocal = ref<Asignatura>({ ...reservaVacia });
const estaEditando = computed(() => !!props.reserva);
watch(() => props.reserva, (nuevoValor) => {
  if (nuevoValor) {
    reservaLocal.value = { ...nuevoValor };
  } else {
    reservaLocal.value = { ...reservaVacia };
  }
}, { immediate: true });

const guardarReserva = () => {
  emit('guardar', reservaLocal.value);
};

const eliminarReserva = () => {
  if (confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
    emit('eliminar');
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  color: black;
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.modal-content input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.modal-actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.modal-actions button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.btn-primary { background-color: #007bff; color: white; }
.btn-danger { background-color: #dc3545; color: white; }
.btn-secondary { background-color: #6c757d; color: white; }
</style>