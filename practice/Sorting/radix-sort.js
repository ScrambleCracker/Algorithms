export function radixSort(arr) {
    const max = Math.max.apply(null, arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(arr, exp);
    }
}

function countSort(arr, exp) {
    const result = new Array(arr.length);
    const count = new Array(10);
    count.fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        result[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }
}
