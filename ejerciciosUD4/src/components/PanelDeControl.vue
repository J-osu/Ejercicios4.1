<script setup lang="ts">
import { AppConfig } from '@/services/AppConfig';
import type { IAppSettings } from '@/types/IAppSettings';

const configService = AppConfig.getInstance();
const settings = configService.getSettings();

const changeTheme = (event: Event) => {
  const newTheme = (event.target as HTMLSelectElement).value as IAppSettings['theme'];
  configService.setTheme(newTheme);
};

const changeLanguage = (event: Event) => {
  const newLang = (event.target as HTMLSelectElement).value as IAppSettings['language'];
  configService.setLanguage(newLang);
};
</script>

<template>
  <div class="panel">
    <h3>Panel de Configuración</h3>

    <label>Tema:</label>
    <select :value="settings.value.theme" @change="changeTheme">
      <option value="light">Claro</option>
      <option value="dark">Oscuro</option>
    </select>
    
    <label>Idioma:</label>
    <select :value="settings.value.language" @change="changeLanguage">
      <option value="es">Español</option>
      <option value="en">Inglés</option>
      <option value="fr">Francés</option>
    </select>

    </div>
</template>