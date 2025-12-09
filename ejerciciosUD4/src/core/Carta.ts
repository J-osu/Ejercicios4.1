import type { Palo } from '@/types/cards';
import type { Valor } from '@/types/cards';

/**
 * Representa una carta individual en la baraja.
 */
export class Carta {
    constructor(public palo: Palo, public valor: Valor) {}

    /**
     * Devuelve el nombre legible de la carta (ej: 'A de Picas ♠️').
     */
    get nombre(): string {
        return `${this.valor} de ${this.palo}`;
    }

    /**
     * Determina si esta carta es jugable sobre otra carta, basándose en la regla
     * de coincidencia de palo o valor.
     * @param otraCarta La carta superior de la pila de descarte.
     */
    esJugableSobre(otraCarta: Carta): boolean {
        // La carta es jugable si coincide el palo O el valor
        return this.palo === otraCarta.palo || this.valor === otraCarta.valor;
    }

    /**
     * Devuelve una representación simple para facilitar el uso en filtros y claves.
     */
    get id(): string {
        return `${this.valor}-${this.palo}`;
    }
}