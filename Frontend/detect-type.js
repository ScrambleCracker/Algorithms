/**
 * @param {any} data
 * @return {string}
 */
export function detectType(data) {
    if (data instanceof FileReader) return 'object';

    return Object.prototype.toString.call(data).match(/\[object (\S+)\]/)[1].toLowerCase();
}
