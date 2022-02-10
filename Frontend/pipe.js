/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
export function pipe(funcs) {
    return function (arg) {
        return funcs.reduce((result, func) => func.call(this, result), arg);
    }
}
