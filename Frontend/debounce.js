export function debounce(func, wait) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => func.apply(this, args), wait);
    }
}

export function debounceWithOptions(func, wait, option = {leading: false, trailing: true}) {
    let timerId,
        leadingArgs;

    return function (...args) {
        if (option.leading && !timerId) {
            func.apply(this, args);
            leadingArgs = args;
        }

        clearTimeout(timerId);

        timerId = setTimeout(() => {
            if (option.trailing && leadingArgs !== args) {
                func.apply(this, args);
            }
            timerId = null;
            leadingArgs = null;
        }, wait);
    }
}
