export function getPowerSet(nums) {
    const subsets = [[]];

    for (const num of nums) {
        const subsetsSize = subsets.length;
        for (let i = 0; i < subsetsSize; ++i) {
            subsets.push(subsets[i].concat([num]));
        }
    }

    return subsets;
}

export function getSubsetWithDuplicates(nums) {
    nums.sort((a, b) => a - b);
    const subsets = [];

    function backtrack(first, subset) {
        subsets.push([...subset]);

        for (let i = first; i < nums.length; ++i) {
            if (i !== first && nums[i] === nums[i - 1]) continue;

            subset.push(nums[i]);
            backtrack(i + 1, subset);
            subset.pop();
        }
    }

    backtrack(0, []);
    return subsets;
}
