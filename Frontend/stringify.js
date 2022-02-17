/**
 * @param {any} data
 * @return {string}
 */
export function stringify(data) {
    if (typeof data === 'bigint') throw new Error("Don't know how to serialize BigInt");
    if (data === undefined || data !== data || typeof data === 'symbol' || data === null || data === Infinity || data === -Infinity) return 'null';
    if (typeof data === 'function') return undefined;
    if (typeof data === 'string') return `"${data}"`;
    if (typeof data !== 'object') return `${data}`;
    if (data instanceof Date) return `"${data.toISOString()}"`;
    if (Array.isArray(data)) {
        return `[${data.map(stringify).join(',')}]`;
    }
    const properties = Object.entries(data).reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc.push(`"${key}":${stringify(value)}`);
        }
        return acc;
    }, []);
    return `{${properties.join(',')}}`;
}
