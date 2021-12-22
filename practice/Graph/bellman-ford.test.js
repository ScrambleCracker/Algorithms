import {getDistancesFromSource} from "./bellman-ford.js";

describe('Bellman-Ford', () => {
    it.each([
        [
            [[[1,2,2], [1,2,5], [2,3,3]], 3, 1],
            [0,0,2,5],
        ],
        [
            [[[1,5,1], [1,2,5], [2,5,3]], 5, 1],
            [0,0,5,Infinity,Infinity,1],
        ],
    ])('should find distances to all nodes', (input, distances) => {
        expect(getDistancesFromSource(...input)).toEqual(distances);
    });
});
