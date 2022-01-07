/**
 * Return maximums for sliding windows of size k
 * @param nums {number[]}
 * @param k {number}
 * @return {number[]}
 */
export function maxSlidingWindow(nums, k) {
    if (k === 1) return nums;
    const maximums = new Array(nums.length - k + 1);
    const dequeue = [];

    for (let i = 0; i < nums.length; i++) {
        while (dequeue.length > 0 && nums[i] > dequeue[dequeue.length - 1]) {
            dequeue.pop();
        }
        dequeue.push(nums[i]);
        if (i >= k - 1) {
            const j = i - k + 1;
            maximums[j] = dequeue[0];
            if (nums[j] === dequeue[0]) {
                dequeue.shift();
            }
        }
    }

    return maximums;
}

// same with DP
function maxSlidingWindowDP(nums, k) {
    const n = nums.length;
    if (n * k === 0) return [];
    if (k === 1) return nums;

    const left = Array.from(nums, () => 0);
    const right = Array.from(left);
    left[0] = nums[0];
    right[n - 1] = nums[n - 1];

    for (let i = 1; i < n; i++) {
        if (i % k === 0) {
            left[i] = nums[i];
        } else {
            left[i] = Math.max(left[i - 1], nums[i]);
        }
        const j = n - i - 1;
        if ((j + 1) % k === 0) {
            right[j] = nums[j];
        } else {
            right[j] = Math.max(right[j + 1], nums[j]);
        }
    }
    const output = new Array(n - k + 1);

    for (let i = 0; i <= n - k; i++) {
        output[i] = Math.max(left[i + k - 1], right[i]);
    }

    return output;
}
