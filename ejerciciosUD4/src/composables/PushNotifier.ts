import type { INotifier } from '../types/INotifier';

export class PushNotifier implements INotifier {
    send(message: string): void {
        console.log(`[PUSH] Enviando a token de dispositivo: "${message}"`);
    }
}