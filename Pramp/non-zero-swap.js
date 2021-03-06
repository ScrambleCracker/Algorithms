/**
 @param arr: integer[]
 @return: integer[]
 */
function moveZerosToEnd(arr) {
    // [0, 1, 0, 0, 3] -> [1, 0 , 0, 0, 3] -> [1, 3, 0, 0, 0]
    // [1, 2, 3, 0, 4] -> [1, 2, 3, 4, 0]
    // [0, 3, 4, 0, 0, 3, 0, 1] -> [3, 0, 4, ...]
    // -> [3, 4, 0, 0, 0, 3, 0, 1] ... -> [3, 4, 3, 1, 0...] O(n^2)
    // nonZero = 0; curr = 0;
    // [0, 3, 4, 0, 0, 3, 0, 1] -> [3, 0, 4...] -> [3, 4, 0,...] O(n) O(1)

    let nonZero = 0;

    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] !== 0) {
            arr[nonZero++] = arr[idx];
            arr[idx] = 0;
        }
    }

    return arr;
}

const input = [0, 3, 4, 0, 0, 3, 0, 1];
console.log(moveZerosToEnd(input));
