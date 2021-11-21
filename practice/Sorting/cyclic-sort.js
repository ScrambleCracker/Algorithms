import { print } from "../../common/print.mjs";

function findMissingNumber(nums) {
    const size = nums.length;
    let start = 0;

    while (start < size) {
        const num = nums[start];
        if (inRange(num) && num !== start && nums[start] !== nums[num]) {
            [nums[start], nums[num]] = [nums[num], nums[start]];
        } else {
            ++start;
        }
    }

    for (let i = 0; i < size; ++i) {
        if (nums[i] !== i) return i;
    }

    return size;

    function inRange(num) {
        return num >= 0 && num < size;
    }
}


const test = [0,1,3,3,4];
const testEnd = [0,1,2,3];

print(findMissingNumber(test));
print(findMissingNumber(testEnd));

