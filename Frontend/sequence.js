/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
export function sequence(funcs){
    let idx = 0;

    return function run(callback, data) {
        if (idx === funcs.length) {
            callback(undefined, data);
            return;
        }

        const func = funcs[idx++];

        func((error, result) => {
            if (error) {
                callback(error);
            } else {
                run(callback, result);
            }
        }, data);
    };
}

export function sequenceWithPromises(funcs){
    const promiseFuncs = funcs.map(promisify);

    return function (callback, data) {
        let promise = Promise.resolve(data);

        for (const asyncFunc of promiseFuncs) {
            promise = promise.then(asyncFunc);
        }

        promise.then((data) => callback(undefined, data))
            .catch(callback);
    }
}

function promisify(func) {
    return function (input) {
        return new Promise((resolve, reject) => {
            func((error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            }, input);
        });
    }
}
