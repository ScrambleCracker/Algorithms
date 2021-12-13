import {MinStack} from "./min-stack.js";

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
});
