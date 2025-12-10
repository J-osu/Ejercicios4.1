# 4.2 Patron Factoria: El Creador de Notificaciones

Este ejercicio usa el patron **Factoria** para gestionar el envio de mensajes. Es como tener un *jefe* que se encarga de decidir que tipo de mensaje enviar, para que tu no tengas que preocuparte por los detalles.

## Por que Factoria

La idea es la **flexibilidad**. Si manana queremos anadir notificaciones por WhatsApp, solo tenemos que tocar la *Factoria* y el *Worker* de WhatsApp. El componente principal que envia mensajes no tiene que cambiar.

## Estructura: El Contrato y los Trabajadores

1.  **El Contrato (`INotifier.ts`)**: Es la regla principal. Dice: "Todo el que quiera ser un notificador debe tener un metodo `send(message)`".
2.  **Los Trabajadores (Workers)**: Son las clases concretas que implementan el contrato:
    * `EmailNotifier.ts`
    * `SmsNotifier.ts`
    * `PushNotifier.ts`

## La Factoria (El Jefe)

Existe una funcion (`notificationFactory`) que actua como el *jefe* de la Factoria.

* El **Jefe** recibe el tipo de notificador que quieres (`'email'`, `'sms'`, etc.).
* El **Jefe** crea la clase correcta (`new EmailNotifier()`).
* El **Jefe** te devuelve el objeto listo para usar, pero solo te dice: "Aqui tienes algo que puede hacer `.send()`".

## Guia de Uso en el Componente

El componente `NotificationComposer.vue` es el **Cliente**. El no se complica: solo llama al jefe y usa lo que le den.

### El flujo en `NotificationComposer.vue`

1.  El componente pide a la Factoria el objeto, usando el tipo seleccionado por el usuario:
    ```typescript
    const notifier = notificationFactory(selectedType.value);
    ```

2.  Una vez que tiene el objeto, el componente simplemente llama al metodo `send()` sin importarle si es un correo o un SMS:
    ```typescript
    notifier.send(message.value);
    ```

Esto asegura que el codigo de envio sea limpio y simple.