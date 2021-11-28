import { edges } from "../../common/graph.mjs";
import { findRedundantConnection } from "./disjoint-set-union";
import { DSU } from "./disjoint-set-union";

describe('Disjoint Set Union', () => {
    it('should find redundant connection', () => {
        expect(findRedundantConnection(edges)).toEqual([1, 4]);
        expect(findRedundantConnection([[1,2]])).toEqual([]);
    });

    it('should find and union', () => {
        const dsu = new DSU(10);

        expect(dsu.find(3)).toBe(3);
        expect(dsu.union(1, 3)).toBeTruthy();
        expect(dsu.union(2, 3)).toBeTruthy();
        expect(dsu.union(1, 2)).toBeFalsy();
        expect(dsu.find(3)).toBe(1);
    });
});
