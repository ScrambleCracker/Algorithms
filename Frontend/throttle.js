export function throttle(func, wait) {
    let lastCall = null, timer = false;

    const check = () => {
        timer = null;

        if (lastCall) {
            lastCall();
            lastCall = null;
            startCooling();
        }
    };

    const startCooling = () => {
        timer = setTimeout(check, wait);
    };

    return function (...args) {
        if (timer) {
            lastCall = func.bind(this, ...args);
            return;
        }

        func(...args);
        startCooling();
    };
}
