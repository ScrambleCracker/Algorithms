/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export function maxSubArrayLen(nums, k) {
    let prefixSum = 0;
    let longestSubarray = 0;
    const indices = new Map();
    indices.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (indices.has(prefixSum - k)) {
            longestSubarray = Math.max(longestSubarray, i - indices.get(prefixSum - k));
        }
        if (!indices.has(prefixSum)) {
            indices.set(prefixSum, i);
        }
    }

    return longestSubarray;
};
