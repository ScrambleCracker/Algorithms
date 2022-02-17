/**
 * @param {object} obj
 * @param {string} methodName
 */
export function spyOn(obj, methodName) {
    if (typeof obj[methodName] !== 'function') throw new Error('Not a function');
    const originMethod = obj[methodName];
    const calls = [];

    Object.defineProperty(obj, methodName, {
        value: (...args) => {
            calls.push(args);
            originMethod.apply(obj, args);
        },
    });

    return { calls };
}
