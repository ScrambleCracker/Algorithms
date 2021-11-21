import { print } from "../../common/print.mjs";

function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort(([startA], [startB]) => startA - startB);
    const merged = [];
    let start = intervals[0][0],
        end = intervals[0][1];

    for (const interval of intervals) {
        if (interval[0] <= end) {
            end = Math.max(end, interval[1]);
        } else {
            merged.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
    }
    merged.push([start, end]);

    return merged;
}

print(mergeIntervals([[1,3], [2,6],[7,10]]));
