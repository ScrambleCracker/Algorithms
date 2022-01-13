import {findMinArrowShots} from "./burst-balloons-arrows.js";

describe('Greedy', () => {
    it.each([
        [[[10,16],[2,8],[1,6],[7,12]], 2],
        [[[1,2],[3,4],[5,6],[7,8]], 4],
        [[], 0],
    ])('should find min shots', (points, result) => {
        expect(findMinArrowShots(points)).toBe(result);
    });
});
