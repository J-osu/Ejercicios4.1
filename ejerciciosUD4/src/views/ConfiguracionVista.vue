<script setup lang="ts">
import PanelDeControl from '@/components/PanelDeControl.vue';
import ContenidoPrincipal from '@/components/ContenidoPrincipal.vue'; // Asegúrate que el nombre de archivo es este
</script>

<template>
  <div class="configuration-page">
    <h1>Ejercicio 4.1: Configuración Global (Singleton)</h1>
    
    <div class="layout-container">
        <div class="sidebar">
            <PanelDeControl />
        </div>

        <div class="main-content">
            <ContenidoPrincipal />
        </div>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  gap: 40px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}
.sidebar {
  flex: 1; 
  padding: 10px;
}
.main-content {
  flex: 2; 
  padding: 10px;
}
/* Añade aquí estilos para que veas el cambio de tema en <article> */
</style>