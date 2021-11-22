import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function topK(nums, k) {
    const minHeap = new MinPriorityQueue();

    for (const num of nums) {
        minHeap.enqueue(num);
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    return minHeap.front().element;
}
