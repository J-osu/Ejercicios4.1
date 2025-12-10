import { EstadoButaca } from '@/types/cinema';
export interface IButaca {
    id: string; // Identificador único (ej: F5-C8)
    fila: number;
    columna: number;
    estado: EstadoButaca;
}