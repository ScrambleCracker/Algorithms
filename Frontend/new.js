/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
export const myNew = (constructor, ...args) => {
    const ctx = Object.create(constructor.prototype);
    const obj = constructor.apply(ctx, args);
    return obj && typeof obj === 'object' ? obj : ctx;
}
