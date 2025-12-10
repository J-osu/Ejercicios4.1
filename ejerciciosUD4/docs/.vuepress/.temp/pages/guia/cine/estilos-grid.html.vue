<template><div><h1 id="_4-estilos-visuales-y-css-grid-dinamico" tabindex="-1"><a class="header-anchor" href="#_4-estilos-visuales-y-css-grid-dinamico"><span>4. Estilos Visuales y CSS Grid Dinámico</span></a></h1>
<p>El componente utiliza un diseño oscuro y la capacidad de las props de Vue para inyectar variables CSS dinámicas.</p>
<h2 id="_4-1-identificacion-de-filas-letras" tabindex="-1"><a class="header-anchor" href="#_4-1-identificacion-de-filas-letras"><span>4.1 Identificación de Filas (Letras)</span></a></h2>
<p>Para que las filas se muestren como A, B, C, etc., se utiliza una lógica simple basada en ASCII dentro de la inicialización de la sala:
// Convierte el índice 0, 1, 2... a 'A', 'B', 'C'...
function getFilaLetra(index: number): string {
return String.fromCharCode(65 + index); // 65 es el código ASCII para 'A'
}</p>
<h3 id="_4-2-css-grid-dinamico" tabindex="-1"><a class="header-anchor" href="#_4-2-css-grid-dinamico"><span>4.2 CSS Grid Dinámico</span></a></h3>
<p>El mapa de butacas se renderiza utilizando CSS Grid para mantener la alineación perfecta, incluso cuando el número de columnas cambia.</p>
<p>La propiedad computada gridStyle inyecta las variables CSS necesarias:
.seating-grid {
display: grid;
/* Define la estructura de columnas dinámicamente */
grid-template-columns: auto repeat(var(--grid-cols), 1fr) auto;
grid-auto-flow: row;
}</p>
<h4 id="explicacion-de-grid-template-columns" tabindex="-1"><a class="header-anchor" href="#explicacion-de-grid-template-columns"><span>Explicación de grid-template-columns:</span></a></h4>
<p>auto: Columna para la etiqueta de fila izquierda (A, B, C...).</p>
<p>repeat(N, 1fr): Genera N columnas iguales (1fr) para las butacas, donde N es el valor de props.columnas.</p>
<p>auto: Columna para la etiqueta de fila derecha (A, B, C...).</p>
<p>Esto garantiza que el mapa sea perfectamente responsivo y mantenga el mismo tamaño de butaca independientemente del número total de columnas.</p>
</div></template>


