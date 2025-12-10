<script setup lang="ts">
import { ref } from 'vue';
// Importación directa desde la carpeta composables
import { notificationFactory, type NotificationType } from '@/composables/useNotificationFactory'; 

const selectedType = ref<NotificationType>('email'); 
const message = ref('');
const logs = ref<string[]>([]); 

function sendNotification() {
    if (!message.value.trim()) {
        const mensajeVacio = 'El mensaje no puede estar vacío.';
        alert(mensajeVacio); 
        return;
    }

    try {
        const notifier = notificationFactory(selectedType.value);
        notifier.send(message.value);

        logs.value.push(`[${selectedType.value.toUpperCase()}] Enviado: "${message.value}"`);
        
        message.value = ''; 

    } catch (error) {
        if (error instanceof Error) {
            alert(error.message); 
        }
    }
}
</script>

<template>
    <div class="composer">
        <h2>Sistema de Notificaciones</h2>
        
        <label for="type-selector">Tipo de Notificación:</label>
        <select id="type-selector" v-model="selectedType">
            <option value="email">Correo Electrónico</option> 
            <option value="sms">SMS</option>
            <option value="push">Push (Token)</option>
        </select>
        
        <label for="message-input">Mensaje:</label>
        <textarea id="message-input" v-model="message" rows="4"></textarea>
        
        <button @click="sendNotification">Enviar Notificación</button>
    </div>

    <div class="logs">
        <h3>Registro de Envíos</h3>
        <ul>
            <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
        </ul>
    </div>
</template>