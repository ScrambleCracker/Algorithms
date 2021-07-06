function moveZerosToEnd(arr) {
    /**
     @param arr: integer[]
     @return: integer[]
     */

        // your code goes here

        // [0, 1, 0, 0, 3] -> [1, 0 , 0, 0, 3] -> [1, 3, 0, 0, 0]
        // [1, 2, 3, 0, 4] -> [1, 2, 3, 4, 0]
        // [0, 3, 4, 0, 0, 3, 0, 1] -> [3, 0, 4, ...]
        // -> [3, 4, 0, 0, 0, 3, 0, 1] ... -> [3, 4, 3, 1, 0...] O(n^2)
        // nonZero = 0; curr = 0;
        // [3, 3, 4...] -> [3, 4, 4,...] O(n) O(1)

    let nonZero = 0;

    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] !== 0) {
            arr[nonZero++] = arr[idx];
        }
    }

    while (nonZero < arr.length) {
        arr[nonZero++] = 0;
    }
    return arr;
}

const input = [];
console.log(moveZerosToEnd(input));
