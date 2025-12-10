/**
 * Enumeración para representar los posibles estados de una butaca.
 */
export enum EstadoButaca {
    DISPONIBLE = 'disponible',
    SELECCIONADO = 'seleccionado',
    OCUPADO = 'ocupado',
    DANADO = 'dañado', // No se puede seleccionar
}

/**
 * Interfaz que define la estructura de datos para cada butaca en la sala.
 */
export interface IButaca {
    id: string; // Identificador único (ej: F5-C8)
    fila: number;
    columna: number;
    estado: EstadoButaca;
}