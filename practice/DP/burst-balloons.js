/**
 * @param {number[]} nums
 * @return {number}
 */
export function maxCoinsBottomUp(nums) {
    nums = [1, ...nums, 1];
    let n = nums.length;
    const dp = Array.from({length: n}, () => new Array(n).fill(0));

    for (let left = n - 2; left > 0; left--) {
        for (let right = left; right < n - 1; right++) {
            for (let i = left; i <= right; i++) {
                const coins = nums[left - 1] * nums[i] * nums[right + 1];
                const remaining = dp[left][i - 1] + dp[i + 1][right];
                dp[left][right] = Math.max(remaining + coins, dp[left][right]);
            }
        }
    }
    return dp[1][n - 2];
}

/**
 * @param {number[]} nums
 * @return {number}
 */
export function maxCoinsTopDown(nums) {
    nums = [1, ...nums, 1];
    const n = nums.length;
    const memo = Array.from({length: n}, () => new Array(n).fill(0));

    return opt(1, nums.length - 2);

    function opt(left, right) {
        if (right - left < 0) {
            return 0;
        }
        if (memo[left][right] > 0) {
            return memo[left][right];
        }

        let result = 0;
        for (let i = left; i <= right; i++) {
            const gain = nums[left - 1] * nums[i] * nums[right + 1];
            const remaining = opt(left, i - 1) + opt(i + 1, right);
            result = Math.max(result, remaining + gain);
        }
        memo[left][right] = result;
        return result;
    }
}
