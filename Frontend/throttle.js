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
        if (!timer) {
            func(...args);
            startCooling();
        } else {
            lastCall = func.bind(this, ...args);
        }
    };
}

export function throttleWithOptions(func, wait, option = {leading: true, trailing: true}) {
    let lastCall = null, timer = null;

    const check = () => {
        timer = null;

        if (lastCall && option.trailing) {
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
        } if (option.leading) {
            func.apply(this, args);
        }
        startCooling();
    };
}
