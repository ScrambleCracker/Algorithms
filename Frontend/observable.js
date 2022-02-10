class Subscriber {
    isActive = true;
    subscriber;

    constructor(subscriber) {
        this.subscriber = typeof subscriber === 'function'
            ? { next: subscriber }
            : subscriber;
    }

    next(val) {
        if (!this.isActive) return;

        this.subscriber.next?.(val);
    }

    error(err) {
        if (!this.isActive) return;

        this.subscriber.error?.(err);
        this.unsubscribe();
    }

    complete() {
        if (!this.isActive) return;

        this.subscriber.complete?.();
        this.unsubscribe();
    }

    unsubscribe() {
        this.isActive = false;
    }
}

class Observable {
    setup;

    constructor(setup) {
        this.setup = setup;
    }

    subscribe(subscriber) {
        subscriber = new Subscriber(subscriber);
        this.setup(subscriber);

        return {
            unsubscribe: subscriber.unsubscribe.bind(subscriber),
        };
    }
}
