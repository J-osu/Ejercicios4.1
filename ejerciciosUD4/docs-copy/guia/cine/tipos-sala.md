1. Tipos de Datos y Estructura de la Sala

Para gestionar el estado de la sala de cine, se definieron un Enum para los estados posibles y una interfaz para la unidad fundamental: la butaca.

1.1 Enumeración EstadoButaca

Esta enumeración es el corazón de la lógica de interacción y define los cuatro estados posibles que una butaca puede adoptar, cada uno mapeado a un estilo visual diferente.

Estado: DISPONIBLE

Valor: 'disponible'

Descripción: Puede ser seleccionada por el usuario.

Estilo Visual: Gris/Morado
_____________________________

Estado: SELECCIONADO

Valor: 'seleccionado'

Descripción: Elegida por el usuario, pendiente de reserva.

Estilo Visual: Púrpura brillante
_____________________________

Estado: OCUPADO

Valor: 'ocupado'

Descripción: Reservada permanentemente por otro cliente.

Estilo Visual: Rojo oscuro / Icono de Persona
_____________________________

Estado: DAÑADO

Valor: 'dañado'

Descripción: Butaca fuera de servicio.

Estilo Visual: Azul oscuro / Icono de Mantenimiento


1.2 Interfaz IButaca

La interfaz define la estructura de datos que se almacena en la matriz reactiva (sala.value).

Propiedades:export interface IButaca {
    id: string; // Ej: 'A3', 'H14'
    fila: number; // Índice 0-basado de la matriz
    columna: number; // Número de asiento (1-basado)
    estado: EstadoButaca;
}

La identificación de filas se realiza mediante una función auxiliar (getFilaLetra) que convierte el índice numérico (0, 1, 2...) de la matriz a la letra correspondiente (A, B, C...).