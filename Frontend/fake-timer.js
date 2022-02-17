export class FakeTimer {
    #origin = {
        clearTimeout,
        setTimeout,
        now: Date.now,
    };
    #timestamp = 0;
    #taskQueue = [];
    #timerId = 0;

    install() {
        window.setTimeout = (callback, wait, ctx = window, ...args) => {
            const id = this.#timerId++;
            this.#taskQueue.push([this.#timestamp + wait, callback.bind(ctx, ...args), id]);
            return id;
        };
        window.clearTimeout = (timerId) => {
            const idx = this.#taskQueue.findIndex(([time, func, id]) => id === timerId);
            if (idx > -1) {
                this.#taskQueue.splice(idx, 1);
            }
        };
        Date.now = () => this.#timestamp;
    }

    uninstall() {
        window.clearTimeout = this.#origin.clearTimeout;
        window.setTimeout = this.#origin.setTimeout;
        Date.now = this.#origin.now;
    }

    tick() {
        if (this.#taskQueue.length === 0) return;
        this.#taskQueue.sort(([timeA], [timeB]) => timeB - timeA);
        while (this.#taskQueue.length > 0) {
            const [time, task] = this.#taskQueue.pop();
            this.#timestamp = time;
            task();
        }
    }
}
