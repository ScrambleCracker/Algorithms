import {MinStack} from "./min-stack.js";
import {canSeePersonsCount, findBuildings} from "./monotonic-stack.js";

describe('Stack', () => {
    it.each([
        [[2, 1, 3], [2, 1, 1]],
        [[4, 3, 2], [4, 3, 2]],
        [[1, 2, 3], [1, 1, 1]],
    ])('should get correct min', (input, expected) => {
        const minStack = new MinStack();

        for (let i = 0; i < input.length; i++) {
            minStack.push(input[i]);
            expect(minStack.getMin()).toBe(expected[i]);
        }

        for (let i = input.length - 1; i >= 0; i--) {
            expect(minStack.getMin()).toBe(expected[i]);
            expect(minStack.pop()).toBe(input[i]);
        }
    });

    it.each([
        [[2,2,2,2], [3]],
        [[4,3,2,1], [0,1,2,3]],
        [[1,3,2,4], [3]],
    ])('should get buildings with ocean view', (input, expected) => {
        expect(findBuildings(input)).toEqual(expected);
    });

    it.each([
        [[10,6,8,5,11,9], [3,1,2,1,1,0]],
        [[5,1,2,3,10], [4,1,1,1,0]],
        [[3, 3, 3], [1, 1, 0]],
    ])('should find how many person can see in queue', (input, expected) => {
        expect(canSeePersonsCount(input)).toEqual(expected);
    });
});
