import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function topK(nums, k) {
    const minHeap = new MinPriorityQueue();

    for (const num of nums) {
        minHeap.enqueue(num);
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    return minHeap.front().element;
}

const small = [
    [1,6,9,3,2,10,150],
    4,
    6
];

let [arr, k, expected] = small;
console.assert(topK(arr, k) === expected);
