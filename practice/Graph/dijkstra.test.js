import { weightedDirected } from "../../common/graph.mjs";
import { findShortestPath } from "./dijkstra";

describe('Dijkstra algorithm', () => {
    let testData;

    beforeEach(() => {
        testData = JSON.parse(JSON.stringify(weightedDirected));
    });

    it('should find shortest path to neighbor', () => {
        expect(findShortestPath(testData, 1, 0)).toBe(1);
    });

    it('should find shortest path to nested node', function () {
        expect(findShortestPath(testData, 1, 5)).toBe(3);
    });
});
