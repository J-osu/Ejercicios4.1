// tests/unit/AppConfig.spec.ts
import { describe, it, expect, vi } from 'vitest';
import { AppConfig } from '@/services/AppConfig'; // Ajusta la ruta

describe('AppConfig (Singleton Pattern)', () => {

  // Limpiamos el estado entre tests para asegurar el patrón Singleton
  beforeEach(() => {
    // Forzamos la reinicialización de la instancia del Singleton
    (AppConfig as any).instance = undefined;
    localStorage.clear();
  });

  it('Test de Unicidad (Singleton)', () => {
    // 1. Llamar a getInstance dos veces. [cite: 827]
    const instancia1 = AppConfig.getInstance();
    const instancia2 = AppConfig.getInstance();

    // 2. Ambas referencias deben apuntar al mismo objeto. [cite: 828]
    expect(instancia1).toBe(instancia2);
  });

  it('Test de Modificación de Estado y Reactividad', () => {
    const configService = AppConfig.getInstance();
    const settings = configService.getSettings();

    // Estado inicial (por defecto)
    expect(settings.value.theme).toBe('light');

    // Cambiar el tema. [cite: 829]
    configService.setTheme('dark');

    // Verificar el cambio. [cite: 829]
    expect(settings.value.theme).toBe('dark');
  });

  it('Test de Persistencia con localStorage', () => {
    // Espiar localStorage.setItem antes de usar el setter. [cite: 830]
    const setItemSpy = vi.spyOn(localStorage, 'setItem');

    const configService = AppConfig.getInstance();

    // Llamar al setter. [cite: 830]
    configService.setLanguage('fr');

    // Verificar que localStorage.setItem fue llamado. [cite: 831]
    expect(setItemSpy).toHaveBeenCalled();
    // Verificar que los argumentos son correctos. [cite: 831]
    expect(setItemSpy).toHaveBeenCalledWith(
      'app-config',
      expect.stringContaining('"language":"fr"')
    );
  });
});