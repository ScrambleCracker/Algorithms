import {maxCoinsBottomUp, maxCoinsTopDown} from "./burst-balloons.js";

describe('Burst Balloons', () => {
    it.each([
        [[3,1,5,8], 167],
        [[1,5], 10],
        [[], 0],
        [[3], 3],
    ])('should get max score', (input, expected) => {
        expect(maxCoinsTopDown(input)).toBe(expected);
        expect(maxCoinsBottomUp(input)).toBe(expected);
    });
});
