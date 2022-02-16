/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
export function memo(func, resolver = (...args) => args.join('_')) {
    const cache = {};

    return function (...args) {
        const key = resolver(...args);
        if (key in cache) return cache[key];

        return cache[key] = func.apply(this, args);
    }
}

/**
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */

export function memoizeOne(func, isEqual = strictEqual) {
    let cache, ctx, prevArgs;

    return function (...args) {
        if (ctx === this && isEqual(prevArgs, args)) return cache;
        prevArgs = args;
        ctx = this;
        return cache = func.apply(this, args);
    }
}

function strictEqual(arr1, arr2) {
    return arr1.length === arr2.length
        && arr1.every((val, idx) => val === arr2[idx]);
}
