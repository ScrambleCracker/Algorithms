/**
 * It's not a sorting, but it uses buckets idea
 * We create buckets of the size t + 1 and put numbers into them
 * if 2 numbers within k index range are in the same bucket,
 * it means they diff between them is less or equal to t
 * also we need to check adjacent buckets,
 * but it's not guaranteed that they are close enough
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
    const d = new Map();
    const w = t + 1;
    for (let i = 0; i < nums.length; i++) {
        const m = getId(nums[i], w);
        if (d.has(m)) return true;
        if (d.has(m - 1) && Math.abs(nums[i] - d.get(m - 1)) < w) {
            return true;
        }
        if (d.has(m + 1) && Math.abs(nums[i] - d.get(m + 1)) < w) {
            return true;
        }
        d.set(m, nums[i]);
        if (i >= k) {
            d.delete(getId(nums[i - k], w));
        }
    }
    return false;
}

function getId(x, w) {
    return (x < 0 ? (x + 1) / w - 1 : x / w) | 0;
}
