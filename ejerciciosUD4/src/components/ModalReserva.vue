<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      ### 📝 {{ isEditing ? 'Editar Reserva' : 'Nueva Reserva' }}

      <p>
        **Bloque:** {{ diaNombre }} ({{ bloqueHora }})
      </p>

      <form @submit.prevent="saveReservation">
        <label for="asignatura">Asignatura:</label>
        <input id="asignatura" type="text" v-model="localReserva.nombre" required>

        <label for="profesor">Profesor:</label>
        <input id="profesor" type="text" v-model="localReserva.profesor" required>

        <label for="grupo">Grupo/Curso:</label>
        <input id="grupo" type="text" v-model="localReserva.grupo" required>

        <div class="modal-actions">
          <button type="submit" class="btn-primary">
            {{ isEditing ? 'Guardar Cambios' : 'Crear Reserva' }}
          </button>

          <button v-if="isEditing" type="button" @click="deleteReservation" class="btn-danger">
            Eliminar Reserva
          </button>

          <button type="button" @click="$emit('close')" class="btn-secondary">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { Asignatura, BloqueHorario } from '@/types/schedule';

// Definición de Props
const props = defineProps<{
  isVisible: boolean;
  reserva: BloqueHorario;
  diaNombre: string;
  bloqueHora: string;
}>();

// Definición de Eventos
const emit = defineEmits(['save', 'delete', 'close']);

// Estado local del formulario
const emptyReservation: Asignatura = { nombre: '', profesor: '', grupo: '' };
const localReserva = ref<Asignatura>({ ...emptyReservation });

// Propiedad computada para saber si estamos editando
const isEditing = computed(() => !!props.reserva);

// Sincronizar la prop 'reserva' con el estado local del formulario
watch(() => props.reserva, (newVal) => {
  if (newVal) {
    // Si hay reserva (edición), clonar los datos
    localReserva.value = { ...newVal };
  } else {
    // Si no hay reserva (creación), resetear el formulario
    localReserva.value = { ...emptyReservation };
  }
}, { immediate: true });

// Métodos
const saveReservation = () => {
  emit('save', localReserva.value);
};

const deleteReservation = () => {
  if (confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
    emit('delete');
  }
};
</script>

<style scoped>
/* Estilos básicos para el Modal */
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