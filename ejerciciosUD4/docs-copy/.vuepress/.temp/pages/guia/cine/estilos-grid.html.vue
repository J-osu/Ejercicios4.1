<template><div><ol start="4">
<li>Estilos Visuales y CSS Grid Dinámico</li>
</ol>
<p>El componente utiliza un diseño oscuro y la capacidad de las props de Vue para inyectar variables CSS dinámicas.</p>
<p>4.1 Identificación de Filas (Letras)</p>
<p>Para que las filas se muestren como A, B, C, etc., se utiliza una lógica simple basada en ASCII dentro de la inicialización de la sala:
// Convierte el índice 0, 1, 2... a 'A', 'B', 'C'...
function getFilaLetra(index: number): string {
return String.fromCharCode(65 + index); // 65 es el código ASCII para 'A'
}</p>
<p>4.2 CSS Grid Dinámico</p>
<p>El mapa de butacas se renderiza utilizando CSS Grid para mantener la alineación perfecta, incluso cuando el número de columnas cambia.</p>
<p>La propiedad computada gridStyle inyecta las variables CSS necesarias:
.seating-grid {
display: grid;
/* Define la estructura de columnas dinámicamente */
grid-template-columns: auto repeat(var(--grid-cols), 1fr) auto;
grid-auto-flow: row;
}</p>
<p>Explicación de grid-template-columns:</p>
<p>auto: Columna para la etiqueta de fila izquierda (A, B, C...).</p>
<p>repeat(N, 1fr): Genera N columnas iguales (1fr) para las butacas, donde N es el valor de props.columnas.</p>
<p>auto: Columna para la etiqueta de fila derecha (A, B, C...).</p>
<p>Esto garantiza que el mapa sea perfectamente responsivo y mantenga el mismo tamaño de butaca independientemente del número total de columnas.</p>
</div></template>


