import {maxProduct} from "./max-product-subarray.js";
import {maxSubArrayLen} from "./longest-subarray-sum-k.js";

describe('Array', () => {
    it.each([
        [[5, -100, 8], 8],
        [[5, -100, -8], 4000],
    ])('should find max product', (arr, expected) => {
        expect(maxProduct(arr)).toBe(expected);
    });

    it.each([
        [[5, -100, 8], 8, 1],
        [[5, -100, 8], 100, 0],
        [[1,-1,5,-2,3], 3, 4],
        [[0,0,0,3], 3, 4],
        [[0,2,0,3], 3, 2],
    ])('should find max sum subarray length', (arr, k, expectedLen) => {
        expect(maxSubArrayLen(arr, k)).toBe(expectedLen);
    });
});
