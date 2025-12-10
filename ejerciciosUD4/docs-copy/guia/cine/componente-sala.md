2. Componente Principal SalaCine.vue

Este componente es el encargado de renderizar y gestionar la interacción con la sala. Utiliza Grid CSS dinámico para adaptar el mapa de butacas a las dimensiones configuradas.

2.1 Props de Configuración

El componente está diseñado para ser reutilizable, permitiendo configurar las dimensiones y el precio por asiento.

Prop: filas

Tipo: Number

Requerido: Sí

Por Defecto: 8

Descripción: Número de filas de butacas que tendrá la sala (determina las letras A, B, C...).
_____________________________

Prop: columnas

Tipo: Number

Requerido: Sí

Por Defecto: 14

Descripción: Número de columnas de butacas (determina los números 1, 2, 3...).
_____________________________

Prop: precioPorButaca

Tipo: Number

Requerido: NO

Por Defecto: 12.00

Descripción: Costo por cada asiento seleccionado para calcular el total a pagar.
_____________________________


2.2 Layout Visual

El diseño se basa en una estructura de dos columnas para pantallas medianas y grandes, inspirada en la UX de las plataformas de cine modernas:

Área: Mapa de Butacas

Contenido: Grid CSS dinámico que muestra las butacas, etiquetas de fila (letras) y etiquetas de columna (números).

Estilo: Ocupa 3/4 del espacio disponible (3fr).
_____________________________

Área: Panel Lateral

Contenido: Contiene el resumen de la selección actual, el total a pagar y la leyenda de estados.

Estilo: Ocupa 1/4 del espacio disponible (1fr).
_____________________________


2.3 Uso en la Aplicación

<!-- 
<template>
  <SalaCine 
    :filas="10" 
    :columnas="16" 
    :precio-por-butaca="9.95" 
  />
</template> 
-->