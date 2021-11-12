/**
 * Returns any index of a target if it contains duplicates, otherwise -1
 *
 * @param {Array<T>} arr
 * @param {T} target
 * @param {number} left
 * @param {number} right
 * @returns {number} index
 */
export function indexOf(arr, target, left, right) {
    while (left <= right) {
        const mid = (left + right) >> 1;

        if (target === arr[mid]) return mid;

        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

/**
 * Returns leftmost index of a target if it contains duplicates, otherwise -1
 *
 * @param {Array<T>} arr
 * @param {T} target
 * @param {number} left
 * @param {number} right
 * @returns {number} index
 */
export function firstIndexOf(arr, target, left, right) {
    while (left <= right) {
        const mid = (left + right) >> 1;

        if (target <= arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return arr[left] === target ? left : -1;
}

/**
 * Returns rightmost index of a target if it contains duplicates, otherwise -1
 *
 * @param {Array<T>} arr
 * @param {T} target
 * @param {number} left
 * @param {number} right
 * @returns {number} index
 */
export function lastIndexOf(arr, target, left, right) {
    while (left <= right) {
        const mid = (left + right) >> 1;

        if (target >= arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return arr[right] === target ? right : -1;
}

/**
 * Returns leftmost index of a target if it contains duplicates,
 * or the index where it should be inserted
 *
 * @param {Array<T>} arr
 * @param {T} target
 * @param {number} left
 * @param {number} right
 * @returns {number} index
 */
export function insertIndexOf(arr, target, left, right) {
    while (left <= right) {
        const mid = (left + right) >> 1;

        if (target <= arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

const data = [1, 3, 3, 5]
console.assert(indexOf(data, 2, 0, 3) === -1, 'Should not find 2');
console.assert(indexOf(data, 5, 0, 3) === 3, 'Should find 5 in full array');
console.assert(indexOf(data, 3, 0, 3) === 1 || indexOf(data, 3, 0, 2) === 2, 'Should find any of 3');
console.assert(indexOf(data, 5, 0, 2) === -1, 'Should search in a range only');


console.assert(firstIndexOf(data, 2, 0, 3) === -1);
console.assert(firstIndexOf(data, 3, 0, 3) === 1);
console.assert(firstIndexOf(data, 1, 0, 3) === 0);

console.assert(lastIndexOf(data, 2, 0, 3) === -1);
console.assert(lastIndexOf(data, 3, 0, 3) === 2);
console.assert(lastIndexOf(data, 5, 0, 3) === 3);

console.assert(insertIndexOf(data, 2, 0, 3) === 1);
console.assert(insertIndexOf(data, 3, 0, 3) === 1);
