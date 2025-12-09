// src/data/mockData.js

import { reactive } from 'vue';
import { BloqueHorario, Aula } from '../types/schedule';

export const DIAS_SEMANA = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
export const BLOQUES_HORARIOS = ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00"];

const horarioAula101: BloqueHorario[][] = [
  // Lunes
  [{ nombre: 'DWECL', profesor: 'J. Pérez', grupo: 'DAM-2A' }, null, { nombre: 'SI', profesor: 'M. García', grupo: 'DAW-2B' }, null],
  // Martes
  [null, { nombre: 'DWECL', profesor: 'J. Pérez', grupo: 'DAM-2A' }, { nombre: 'DWECL', profesor: 'J. Pérez', grupo: 'DAM-2A' }, null],
  // Miércoles, Jueves, Viernes... (el resto inicializado como libre)
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

const horarioAula205: BloqueHorario[][] = [
  // Lunes
  [null, { nombre: 'EIE', profesor: 'S. Ruiz', grupo: 'DAW-2A' }, null, null],
  // Resto
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

// Usamos reactive para que los datos puedan ser modificados en el componente principal
export const aulas: Aula[] = reactive([
  { id: 'A101', nombre: 'Aula 101 - Informática', horario: horarioAula101 },
  { id: 'A205', nombre: 'Aula 205 - Proyector', horario: horarioAula205 },
]);