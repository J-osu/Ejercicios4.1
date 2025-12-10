import { describe, test, expect } from 'vitest';
// Importamos las clases concretas que esperamos recibir
import { EmailNotifier } from '@/composables/EmailNotifier';
import { SmsNotifier } from '@/composables/SmsNotifier';
import { PushNotifier } from '@/composables/PushNotifier';
// Importamos la función Factoría a probar
import { notificationFactory } from '@/composables/useNotificationFactory';

describe('notificationFactory', () => {

    test('Test 1: Factoría de Email debe devolver una instancia de EmailNotifier', () => {
        const notificador = notificationFactory('email');
        expect(notificador).toBeInstanceOf(EmailNotifier);
    });

    test('Test 2: Factoría de SMS debe devolver una instancia de SmsNotifier', () => {
        const notificador = notificationFactory('sms');
        expect(notificador).toBeInstanceOf(SmsNotifier);
    });

    test('Test 3: Factoría de Push debe devolver una instancia de PushNotifier', () => {
        const notificador = notificationFactory('push');
        expect(notificador).toBeInstanceOf(PushNotifier);
    });

    test('Test 4: El uso de un tipo inválido debe lanzar un error', () => {
        const tipoInvalido = 'telegram' as any;
        
        // Esperamos que la llamada a la función arroje el error
        expect(() => notificationFactory(tipoInvalido)).toThrow(
            `Tipo de notificación no soportado: ${tipoInvalido}`
        );
    });
});