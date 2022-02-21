/**
 * There is guarantied an element with frequency more than n/2
 * @param nums number[]
 * @returns number
 */
export function majorityElement(nums) {
    let candidate = null,
        count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += candidate === num ? 1 : -1;
    }

    return candidate;
}
