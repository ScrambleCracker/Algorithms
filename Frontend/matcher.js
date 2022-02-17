/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
class Matcher {
    #data;
    #inverted;
    constructor(data, inverted = false) {
        this.#data = data;
        this.#inverted = inverted;
    }

    toBe(data) {
        const isSame = Object.is(this.#data, data);
        if (this.#inverted && isSame || !this.#inverted && !isSame) {
            throw new Error(`Expected ${this.#inverted ? 'not' : ''} ${data} but got ${this.#data}`);
        }
    }

    get not() {
        return new Matcher(this.#data, !this.#inverted);
    }
}

/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
export function myExpect(input) {
    return new Matcher(input);
}
