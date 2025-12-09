export interface Asignatura {
  nombre: string;
  profesor: string;
  grupo: string;
}

export type BloqueHorario = Asignatura | null;

export type HorarioAula = BloqueHorario[][];

export interface Aula {
  id: string;
  nombre: string;
  horario: HorarioAula;
}