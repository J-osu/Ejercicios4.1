import { ref, readonly, type DeepReadonly, type Ref } from 'vue';
import type { IAppSettings } from '@/interface/IAppSettings';

export class AppConfig {
  private static instance: AppConfig;
  private readonly _settings: Ref<IAppSettings>;

  private constructor() {
    const defaultSettings: IAppSettings = {
      theme: 'light',
      language: 'es',
      fontSize: 'medium',
      fontFamily: 'Verdana',
    };

    const savedSettings = localStorage.getItem('app-config');
    const initialSettings = savedSettings ? JSON.parse(savedSettings) : defaultSettings;

    this._settings = ref<IAppSettings>(initialSettings);
  }

  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  public getSettings(): DeepReadonly<Ref<IAppSettings>> {
    return readonly(this._settings);
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('app-config', JSON.stringify(this._settings.value));
  }

  public setTheme(theme: IAppSettings['theme']): void {
    this._settings.value.theme = theme;
    this.saveToLocalStorage();
  }

  public setLanguage(lang: IAppSettings['language']): void {
    this._settings.value.language = lang;
    this.saveToLocalStorage();
  }
  public setFontSize(size: IAppSettings['fontSize']): void {
    this._settings.value.fontSize = size;
    this.saveToLocalStorage();
  }

  public setFontFamily(family: IAppSettings['fontFamily']): void {
    this._settings.value.fontFamily = family;
    this.saveToLocalStorage();
  }
}