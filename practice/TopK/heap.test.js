import { topK } from './heap.js';

describe('Top K element using heap', () => {
    const cases = [
        [
            [1,6,9,3,2,10,150],
            4,
            6,
        ],
        [
            [1,2,3],
            1,
            3,
        ],
    ];
    it.each(cases)('should find top element', (arr, k, expected) => {
        expect(topK(arr, k)).toBe(expected);
    });
});
