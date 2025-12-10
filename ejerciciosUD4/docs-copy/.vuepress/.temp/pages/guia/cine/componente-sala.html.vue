<template><div><ol start="2">
<li>Componente Principal SalaCine.vue</li>
</ol>
<p>Este componente es el encargado de renderizar y gestionar la interacción con la sala. Utiliza Grid CSS dinámico para adaptar el mapa de butacas a las dimensiones configuradas.</p>
<p>2.1 Props de Configuración</p>
<p>El componente está diseñado para ser reutilizable, permitiendo configurar las dimensiones y el precio por asiento.</p>
<p>Prop: filas</p>
<p>Tipo: Number</p>
<p>Requerido: Sí</p>
<p>Por Defecto: 8</p>
<p>Descripción: Número de filas de butacas que tendrá la sala (determina las letras A, B, C...).</p>
<hr>
<p>Prop: columnas</p>
<p>Tipo: Number</p>
<p>Requerido: Sí</p>
<p>Por Defecto: 14</p>
<p>Descripción: Número de columnas de butacas (determina los números 1, 2, 3...).</p>
<hr>
<p>Prop: precioPorButaca</p>
<p>Tipo: Number</p>
<p>Requerido: NO</p>
<p>Por Defecto: 12.00</p>
<p>Descripción: Costo por cada asiento seleccionado para calcular el total a pagar.</p>
<hr>
<p>2.2 Layout Visual</p>
<p>El diseño se basa en una estructura de dos columnas para pantallas medianas y grandes, inspirada en la UX de las plataformas de cine modernas:</p>
<p>Área: Mapa de Butacas</p>
<p>Contenido: Grid CSS dinámico que muestra las butacas, etiquetas de fila (letras) y etiquetas de columna (números).</p>
<p>Estilo: Ocupa 3/4 del espacio disponible (3fr).</p>
<hr>
<p>Área: Panel Lateral</p>
<p>Contenido: Contiene el resumen de la selección actual, el total a pagar y la leyenda de estados.</p>
<p>Estilo: Ocupa 1/4 del espacio disponible (1fr).</p>
<hr>
<p>2.3 Uso en la Aplicación</p>
<!-- 
<template>
  <SalaCine 
    :filas="10" 
    :columnas="16" 
    :precio-por-butaca="9.95" 
  />
</template> 
--></div></template>


