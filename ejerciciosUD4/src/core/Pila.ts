export class Pila<T> {
    // Almacenamiento interno de los elementos de la pila
    private elementos: T[] = [];

    /**
     * Añade un elemento a la cima de la pila.
     * @param elemento El elemento a añadir.
     */
    push(elemento: T): void {
        this.elementos.push(elemento);
    }

    /**
     * Saca y devuelve el elemento de la cima de la pila (LIFO).
     * @returns El elemento superior, o undefined si la pila está vacía.
     */
    pop(): T | undefined {
        return this.elementos.pop();
    }

    /**
     * Devuelve el elemento de la cima de la pila sin sacarlo.
     * @returns El elemento superior, o undefined si la pila está vacía.
     */
    peek(): T | undefined {
        // Accede al último elemento del array
        return this.elementos[this.elementos.length - 1];
    }

    /**
     * Devuelve el número de elementos en la pila.
     */
    size(): number {
        return this.elementos.length;
    }

    /**
     * Comprueba si la pila está vacía.
     */
    isEmpty(): boolean {
        return this.elementos.length === 0;
    }

    /**
     * Devuelve una copia inmutable del array subyacente (necesario para reconstituir el mazo).
     */
    getElementos(): T[] {
        return [...this.elementos];
    }
}