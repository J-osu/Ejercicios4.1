// src/tests/AppConfig.spec.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AppConfig } from '@/services/AppConfig';

const localStorageMock = (function () {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

describe('AppConfig (Singleton Pattern)', () => {

  beforeEach(() => {
    localStorageMock.clear();
    localStorageMock.setItem.mockClear(); 
    localStorageMock.getItem.mockClear();

    (AppConfig as any).instance = undefined;
  });

  it('Test de Unicidad (Singleton)', () => {
    const instancia1 = AppConfig.getInstance();
    const instancia2 = AppConfig.getInstance();
    expect(instancia1).toBe(instancia2);
  });

  it('Test de Modificación de Estado y Reactividad', () => {
    const configService = AppConfig.getInstance();
    const settings = configService.getSettings();
    
    expect(settings.value.theme).toBe('light');

    configService.setTheme('dark');

    expect(settings.value.theme).toBe('dark');
  });

  it('Test de Persistencia con localStorage', () => {
    
    const configService = AppConfig.getInstance();

    configService.setLanguage('fr');

    const setItemSpy = localStorageMock.setItem; 

    expect(setItemSpy).toHaveBeenCalled();
    expect(setItemSpy).toHaveBeenCalledWith(
      'app-config',
      expect.stringContaining('"language":"fr"')
    );
  });
  
  it('Test 4: Carga de estado desde localStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce(
        JSON.stringify({ theme: 'dark', language: 'en', fontSize: 'small', fontFamily: 'Arial' })
    );

    const configService = AppConfig.getInstance();
    const settings = configService.getSettings();

    expect(localStorageMock.getItem).toHaveBeenCalledWith('app-config');

    expect(settings.value.theme).toBe('dark');
    expect(settings.value.language).toBe('en');
  });
});