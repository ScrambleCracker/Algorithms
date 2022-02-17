const allHandlers = new Map();

/**
 * @param {HTMLElement} root
 * @param {(el: HTMLElement) => boolean} predicate
 * @param {(e: Event) => void} handler
 */
export function onClick(root, predicate, handler) {
    if (allHandlers.has(root)) {
        allHandlers.get(root).push([predicate, handler]);
        return;
    }

    allHandlers.set(root, [[predicate, handler]]);

    root.addEventListener('click', (event) => {
        const handlers = allHandlers.get(root);
        let el = event.target,
            isPropagationStopped = false;
        event.stopPropagation = () => isPropagationStopped = true;

        while (el) {
            let isImmediatePropagationStopped = false;
            event.stopImmediatePropagation = () => {
                isPropagationStopped = isImmediatePropagationStopped = true;
            }

            for (const [predicate, handler] of handlers) {
                if (predicate(el)) {
                    handler.call(el, event);
                }

                if (isImmediatePropagationStopped) break;
            }

            if (el === root || isPropagationStopped) break;
            el = el.parentElement;
        }
    }, false);
}
