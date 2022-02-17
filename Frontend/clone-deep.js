function isObject(data) {
    return data !== null && typeof data === 'object';
}

export function cloneDeep(data) {
    const memo = new Map();

    return clone(data);

    function clone(data) {
        if (!isObject(data)) return data;
        if (memo.has(data)) return memo.get(data);

        const cloneObj = data.constructor();
        memo.set(data, cloneObj);

        const keys = [...Object.getOwnPropertySymbols(data), ...Object.keys(data)];
        for (const key of keys) {
            cloneObj[key] = clone(data[key]);
        }

        return cloneObj;
    }
}
