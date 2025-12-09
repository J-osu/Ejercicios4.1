import { describe, it, expect, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { ref, computed } from 'vue';
import GestorHorarios from '@/components/GestorHorarios.vue'; 
import { aulas, DIAS_SEMANA, BLOQUES_HORARIOS } from '@/data/schedule'; 
import { Asignatura } from '@/types/schedule';

const RESERVA_EJEMPLO: Asignatura = {
    nombre: 'Matemáticas',
    profesor: 'García',
    grupo: '4A'
};

let wrapper: any;

const setupComponent = () => {
    return shallowMount(GestorHorarios, {
        global: {
            stubs: {
                ModalReserva: true 
            }
        }
    });
};

describe('GestorHorarios - Lógica de Datos', () => {
    beforeEach(() => {
        wrapper = setupComponent();
    });

    it('Test 1: Estado Inicial - El horarioActual debe corresponder al de la primera aula', () => {
        expect(wrapper.vm).toBeDefined();

        const primeraAulaId = aulas[0].id;
        expect(wrapper.vm.idAulaSeleccionada).toBe(primeraAulaId);

        const horarioEsperado = aulas[0].horario;
        expect(wrapper.vm.horarioActual).toEqual(horarioEsperado);
    });

    it('Test 2: Cambio de Aula - horarioActual se actualiza correctamente al cambiar idAulaSeleccionada', async () => {
        if (aulas.length < 2) return; 

        const segundaAula = aulas[1];
        const nuevoId = segundaAula.id;

        wrapper.vm.idAulaSeleccionada = nuevoId;

        expect(wrapper.vm.aulaActual.id).toBe(nuevoId);

        expect(wrapper.vm.horarioActual).toEqual(segundaAula.horario);
    });

    it('Test 3: Añadir Reserva - Inserta datos correctamente en un bloque Libre (null)', () => {
        const dia = 0;
        const bloque = 0;
        
        if (wrapper.vm.horarioActual[dia][bloque] !== null) {
            wrapper.vm.horarioActual[dia][bloque] = null;
        }

        wrapper.vm.abrirModal(dia, bloque, null);

        wrapper.vm.manejarGuardar(RESERVA_EJEMPLO);

        const horarioModificado = aulas[0].horario[dia][bloque];
        expect(horarioModificado).toEqual(RESERVA_EJEMPLO);

        expect(wrapper.vm.esModalVisible).toBe(false);
        expect(wrapper.vm.slotEditando).toBe(null);
    });

    it('Test 4: Modificar Reserva - Actualiza los datos de un bloque ya existente', () => {
        const dia = 1;
        const bloque = 2;
        
        const NUEVOS_DATOS: Asignatura = {
            nombre: 'Física Avanzada',
            profesor: 'Dr. House',
            grupo: '6B'
        };

        aulas[0].horario[dia][bloque] = { nombre: 'Viejo Nombre', profesor: 'Viejo Prof', grupo: 'Viejo Grupo' };

        wrapper.vm.abrirModal(dia, bloque, aulas[0].horario[dia][bloque]);

        wrapper.vm.manejarGuardar(NUEVOS_DATOS);

        const horarioModificado = aulas[0].horario[dia][bloque];
        expect(horarioModificado).toEqual(NUEVOS_DATOS);
        
        expect(wrapper.vm.esModalVisible).toBe(false);
        expect(wrapper.vm.slotEditando).toBe(null);
    });

    it('Test 5: Eliminar Reserva - Establece el bloque horario a null', () => {
        const dia = 4;
        const bloque = 3;

        aulas[0].horario[dia][bloque] = RESERVA_EJEMPLO;

        wrapper.vm.abrirModal(dia, bloque, aulas[0].horario[dia][bloque]);

        wrapper.vm.manejarEliminar();

        const horarioModificado = aulas[0].horario[dia][bloque];
        expect(horarioModificado).toBeNull();

        expect(wrapper.vm.esModalVisible).toBe(false);
        expect(wrapper.vm.slotEditando).toBe(null);
    });
});