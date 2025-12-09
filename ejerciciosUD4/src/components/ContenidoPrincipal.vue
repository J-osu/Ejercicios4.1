<script setup lang="ts">
import { AppConfig } from '@/services/AppConfig';
import { computed } from 'vue';

const settings = AppConfig.getInstance().getSettings();

const contentClasses = computed(() => {
  // 1. COMPROBACIÓN DE SEGURIDAD EN PROPIEDAD COMPUTADA
  if (!settings.value) return ''; 
    
  const family = settings.value.fontFamily.toLowerCase();
  return `font-${settings.value.fontSize} family-${family}`;
});

const texts = computed(() => {
  // 2. COMPROBACIÓN DE SEGURIDAD EN PROPIEDAD COMPUTADA
  if (!settings.value) {
      // Devuelve valores por defecto mientras carga
      return { title: 'Cargando configuración...', body: 'Por favor espere.' }; 
  }
    
  const dict = {
    es: { title: 'Bienvenido a la Aplicación', body: 'Este es un texto de ejemplo.' },
    en: { title: 'Welcome to the Application', body: 'This is an example text.' },
    fr: { title: 'Bienvenue dans l\'Application', body: 'Ceci est un texte exemple.' },
  };
  return dict[settings.value.language];
});
</script>

<template>
  <article :class="contentClasses" :data-theme="settings.value?.theme">
    <h2>{{ texts.title }}</h2>
    <p>{{ texts.body }}</p>
    </article>
</template>