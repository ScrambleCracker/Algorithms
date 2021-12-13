/**
 * @param {number[]} nums
 * @return {number}
 */
export function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let max = nums[0],
        minSoFar = nums[0],
        maxSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const maxProduct = maxSoFar * num;
        const minProduct = minSoFar * num;
        minSoFar = Math.min(num, maxProduct, minProduct);
        maxSoFar = Math.max(num, maxProduct, minProduct);

        max = Math.max(max, maxSoFar);
    }

    return max;
}
