/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
export function curry(fn) {
    return function curried(...args) {
        return args.length >= fn.length
            ? fn.apply(this, args)
            : curried.bind(this, ...args);
    };
}

export function curryWithPlaceholder(fn) {
    return function curried(...args) {
        if (args.length >= fn.length && !args.slice(0, fn.length).includes(curryWithPlaceholder.placeholder)) {
            return fn.apply(this, args);
        }
        return function (...newArgs) {
            args = args.map(arg => arg === curryWithPlaceholder.placeholder && newArgs.length ? newArgs.shift() : arg);
            return curried.call(this, ...args, ...newArgs);
        }
    }
}

curryWithPlaceholder.placeholder = Symbol();
