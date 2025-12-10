<template><div><ol>
<li>Tipos de Datos y Estructura de la Sala</li>
</ol>
<p>Para gestionar el estado de la sala de cine, se definieron un Enum para los estados posibles y una interfaz para la unidad fundamental: la butaca.</p>
<p>1.1 Enumeración EstadoButaca</p>
<p>Esta enumeración es el corazón de la lógica de interacción y define los cuatro estados posibles que una butaca puede adoptar, cada uno mapeado a un estilo visual diferente.</p>
<p>Estado: DISPONIBLE</p>
<p>Valor: 'disponible'</p>
<p>Descripción: Puede ser seleccionada por el usuario.</p>
<p>Estilo Visual: Gris/Morado</p>
<hr>
<p>Estado: SELECCIONADO</p>
<p>Valor: 'seleccionado'</p>
<p>Descripción: Elegida por el usuario, pendiente de reserva.</p>
<p>Estilo Visual: Púrpura brillante</p>
<hr>
<p>Estado: OCUPADO</p>
<p>Valor: 'ocupado'</p>
<p>Descripción: Reservada permanentemente por otro cliente.</p>
<p>Estilo Visual: Rojo oscuro / Icono de Persona</p>
<hr>
<p>Estado: DAÑADO</p>
<p>Valor: 'dañado'</p>
<p>Descripción: Butaca fuera de servicio.</p>
<p>Estilo Visual: Azul oscuro / Icono de Mantenimiento</p>
<p>1.2 Interfaz IButaca</p>
<p>La interfaz define la estructura de datos que se almacena en la matriz reactiva (sala.value).</p>
<p>Propiedades:export interface IButaca {
id: string; // Ej: 'A3', 'H14'
fila: number; // Índice 0-basado de la matriz
columna: number; // Número de asiento (1-basado)
estado: EstadoButaca;
}</p>
<p>La identificación de filas se realiza mediante una función auxiliar (getFilaLetra) que convierte el índice numérico (0, 1, 2...) de la matriz a la letra correspondiente (A, B, C...).</p>
</div></template>


