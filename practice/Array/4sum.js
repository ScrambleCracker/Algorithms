export function fourSumCount(nums1, nums2, nums3, nums4) {
    const counter = new Map();
    let count = 0;

    for (const a of nums1) {
        for (const b of nums2) {
            counter.set(a + b, (counter.get(a + b) ?? 0) + 1);
        }
    }

    for (const c of nums3) {
        for (const d of nums4) {
            count += counter.get(-(c + d)) ?? 0;
        }
    }

    return count;
}

export function kSumCount(...arrays) {
    const counter = new Map();
    const arraysCount = arrays.length;
    const mid = arraysCount >> 1;

    addToHash(0, 0);

    return countComplements(mid, 0);

    function addToHash(i, sum) {
        if (i === mid) {
            counter.set(sum, (counter.get(sum) ?? 0) + 1);
        } else {
            for (const num of arrays[i]) {
                addToHash(i + 1, sum + num);
            }
        }
    }

    function countComplements(i, complement) {
        if (i === arraysCount) {
            return counter.get(complement) ?? 0;
        }

        let count = 0;
        for (const num of arrays[i]) {
            count += countComplements(i + 1, complement - num);
        }
        return count;
    }
}
