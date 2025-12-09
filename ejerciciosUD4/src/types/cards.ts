export type Palo = 'Picas ♠️' | 'Corazones ❤️' | 'Tréboles ♣️' | 'Diamantes ♦️';
export type Valor = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

// Tipo base para las coordenadas de geolocalización
export interface Coordinates {
    latitude: number;
    longitude: number;
}