/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
export function get(source, path, defaultValue = undefined) {
    const segments = typeof path === 'string' ? path.match(/[^\.\[\]]/gi) : path;
    if (!(segments && segments.length)) return;

    return segments.reduce((obj, key) => obj && obj[key], source) ?? defaultValue;
}
