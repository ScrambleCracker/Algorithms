function topK(arr, k) {
    const targetIdx = k - 1; // or arr.length - 1 - k if it should be from right
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let pivotIdx = getPivotIdx(left, right);
        pivotIdx = partition(left, right, pivotIdx);

        if (targetIdx === pivotIdx) return arr[pivotIdx];
        if (targetIdx < pivotIdx) {
            right = pivotIdx - 1;
        } else {
            left = pivotIdx + 1;
        }
    }

    return arr[left];

    function partition(left, right, pivotIdx) {
        const pivot = arr[pivotIdx];
        swap(pivotIdx, right);
        let storeIdx = left;

        for (let i = left; i < right; ++i) {
            if (arr[i] < pivot) {
                swap(i, storeIdx++);
            }
        }
        swap(right, storeIdx);
        return storeIdx;
    }

    function getPivotIdx(left, right) {
        // random or median value. random is simpler to implement
        return left + Math.floor(Math.random() * (right - left + 1));
    }

    function swap(left, right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
}
const small = [
    [1,6,9,3,2,10,150],
    4,
    6
];

let [arr, k, expected] = small;
console.assert(topK(arr, k) === expected);
