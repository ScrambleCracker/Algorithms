/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    return function curried(...args) {
        return args.length >= fn.length
            ? fn.apply(this, args)
            : curried.bind(this, ...args);
    };
}
