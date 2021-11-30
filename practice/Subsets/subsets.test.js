import { getUniquePairs } from "./unique-pairs";
import {getPowerSet, getSubsetWithDuplicates} from "./power-set";

describe('Subsets', () => {
    let data;

    beforeEach(() => {
        data = [1, 2, 3, 4];
    });

    it('should form unique pairs', () => {
        const pairs = getUniquePairs(data);

        expect(pairs).toHaveLength(6);
        expect(pairs).toContainEqual([1, 2]);
        expect(pairs).toContainEqual([1, 3]);
        expect(pairs).toContainEqual([1, 4]);
        expect(pairs).toContainEqual([2, 3]);
        expect(pairs).toContainEqual([2, 4]);
        expect(pairs).toContainEqual([3, 4]);
        expect(pairs).not.toContainEqual([3, 1]);
        expect(pairs).not.toContainEqual([4, 2]);
    });

    it('should return power set', () => {
        data.pop(); // 1 2 3
        const powerSet = getPowerSet(data);
        expect(powerSet).toHaveLength(8); // 2^length
        expect(powerSet).toContainEqual([]);
        expect(powerSet).toContainEqual([1]);
        expect(powerSet).toContainEqual([1, 3]);
        expect(powerSet).toContainEqual([1, 2, 3]);
        expect(powerSet).not.toContainEqual([3, 2, 1]);
    });

    it('should return subset with duplicates', () => {
        data.pop();
        data.push(2); // 1 2 3 2
        const subsets = getSubsetWithDuplicates(data);
        expect(subsets).toHaveLength(12);
        expect(subsets).toContainEqual([]);
        expect(subsets).toContainEqual([2, 2]);
        expect(subsets).toContainEqual([1, 2, 2]);
        expect(subsets).toContainEqual([1, 2, 3]);
        expect(subsets).not.toContainEqual([3, 2, 1]);
    })
});
