<template>
  <div class="view-container">
    <h1 class="title">Sala de Cine</h1>
    <!-- Uso del componente SalaCine con props de ejemplo -->
    <SalaCine :filas="10" :columnas="10" :precioPorButaca="7.5" />
  </div>
</template>

<script setup lang="ts">
import SalaCine from '@/components/SalaCine.vue';
</script>

<style scoped>
.view-container {
  padding: 10px;
}
.title {
  color: #6366f1;
  text-align: center;
  margin-bottom: 16px;
}
</style>
