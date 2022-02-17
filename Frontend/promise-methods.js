/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
export function all(promises) {
    const total = promises.length;
    if (total === 0) return Promise.resolve([]);

    const results = new Array(total);
    let resolved = 0;

    return new Promise((resolve, reject) => {
        for (let idx = 0; idx < total; idx++) {
            const promise = promises[idx] instanceof Promise ? promises[idx] : Promise.resolve(promises[idx]);
            promise.then((data) => {
                results[idx] = data;
                if (++resolved === total) {
                    resolve(results);
                }
            }, reject);
        }
    });
}

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
export function any(promises) {
    return new Promise((resolve, reject) => {
        let pending = promises.length;
        const errors = new Array(pending);
        if (pending === 0) return reject(getAggregatedError());
        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((data) => resolve(data))
                .catch((error) => {
                    errors[i] = error;
                    if (--pending === 0) {
                        reject(getAggregatedError());
                    }
                });
        }

        function getAggregatedError() {
            return new AggregateError('No Promise in Promise.any was resolved', errors);
        }
    });
}
