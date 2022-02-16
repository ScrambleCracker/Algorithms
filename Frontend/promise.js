const STATES = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
};

export class MyPromise {
    #state = STATES.PENDING;
    #handlers = [];
    #result;

    constructor(executor) {
        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        } catch (err) {
            this._reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this.#handlers.push({
                [STATES.FULFILLED]: (value) => {
                    if (typeof onFulfilled !== 'function') {
                        resolve(value);
                        return;
                    }
                    try {
                        resolve(onFulfilled(value));
                    } catch (err) {
                        reject(err);
                    }
                },
                [STATES.REJECTED]: (error) => {
                    if (typeof onRejected !== 'function') {
                        reject(error);
                        return;
                    }

                    try {
                        resolve(onRejected(error));
                    } catch (err) {
                        reject(err);
                    }

                }
            });

            this.#executeHandlers();
        });
    }

    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    #executeHandlers() {
        if (this.#state === STATES.PENDING) return;
        for (const handler of this.#handlers) {
            queueMicrotask(() => {
                handler[this.#state](this.result);
            });
        }

        this.#handlers = [];
    }

    _resolve(value) {
        if (this.#state !== STATES.PENDING) return;
        if(value instanceof MyPromise) {

            value.then(this._resolve.bind(this), this._reject.bind(this));
            return;
        }

        this.#state = STATES.FULFILLED;
        this.#result = value;
        this.#executeHandlers();
    }

    _reject(error) {
        if (this.#state !== STATES.PENDING) return;
        this.#state = STATES.REJECTED;
        this.#result = error;
        this.#executeHandlers();
    }

    static resolve(value) {
        return new MyPromise((resolve) => {
            resolve(value);
        })
    }

    static reject(value) {
        return new MyPromise((resolve, reject) => {
            reject(value);
        })
    }
}
