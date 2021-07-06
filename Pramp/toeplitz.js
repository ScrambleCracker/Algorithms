/**
 @param arr: integer[][]
 @return: boolean
 */
function isToeplitz(arr) {
    if (arr.length === 0) return false;

    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i - 1][j - 1] !== arr[i][j]) return false;
        }
    }

    return true;
}

const input = [[1,2,3,4],
    [5,1,2,3],
    [7,5,1,2],
];

console.log(isToeplitz(input));
