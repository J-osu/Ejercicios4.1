<template><div><h1 id="_2-componente-principal-salacine-vue" tabindex="-1"><a class="header-anchor" href="#_2-componente-principal-salacine-vue"><span>2. Componente Principal SalaCine.vue</span></a></h1>
<p>Este componente es el encargado de renderizar y gestionar la interacción con la sala. Utiliza Grid CSS dinámico para adaptar el mapa de butacas a las dimensiones configuradas.</p>
<h2 id="_2-1-props-de-configuracion" tabindex="-1"><a class="header-anchor" href="#_2-1-props-de-configuracion"><span>2.1 Props de Configuración</span></a></h2>
<p>El componente está diseñado para ser reutilizable, permitiendo configurar las dimensiones y el precio por asiento.</p>
<p><strong>Prop:</strong> filas</p>
<p><strong>Tipo:</strong> Number</p>
<p><strong>Requerido:</strong> Sí</p>
<p><strong>Por Defecto:</strong> 8</p>
<p><strong>Descripción:</strong> Número de filas de butacas que tendrá la sala (determina las letras A, B, C...).</p>
<hr>
<p><strong>Prop:</strong> columnas</p>
<p><strong>Tipo:</strong> Number</p>
<p><strong>Requerido:</strong> Sí</p>
<p><strong>Por Defecto:</strong> 14</p>
<p><strong>Descripción:</strong> Número de columnas de butacas (determina los números 1, 2, 3...).</p>
<hr>
<p><strong>Prop:</strong> precioPorButaca</p>
<p><strong>Tipo:</strong> Number</p>
<p><strong>Requerido:</strong> NO</p>
<p><strong>Por Defecto:</strong> 12.00</p>
<p><strong>Descripción:</strong> Costo por cada asiento seleccionado para calcular el total a pagar.</p>
<hr>
<h3 id="_2-2-layout-visual" tabindex="-1"><a class="header-anchor" href="#_2-2-layout-visual"><span>2.2 Layout Visual</span></a></h3>
<p>El diseño se basa en una estructura de dos columnas para pantallas medianas y grandes, inspirada en la UX de las plataformas de cine modernas:</p>
<p><strong>Área:</strong> Mapa de Butacas</p>
<p><strong>Contenido:</strong> Grid CSS dinámico que muestra las butacas, etiquetas de fila (letras) y etiquetas de columna (números).</p>
<p><strong>Estilo:</strong> Ocupa 3/4 del espacio disponible (3fr).</p>
<hr>
<p><strong>Área:</strong> Panel Lateral</p>
<p><strong>Contenido:</strong> Contiene el resumen de la selección actual, el total a pagar y la leyenda de estados.</p>
<p><strong>Estilo:</strong> Ocupa 1/4 del espacio disponible (1fr).</p>
<hr>
<h4 id="_2-3-uso-en-la-aplicacion" tabindex="-1"><a class="header-anchor" href="#_2-3-uso-en-la-aplicacion"><span>2.3 Uso en la Aplicación</span></a></h4>
<!-- 
<template>
  <SalaCine 
    :filas="10" 
    :columnas="16" 
    :precio-por-butaca="9.95" 
  />
</template> 
--></div></template>


