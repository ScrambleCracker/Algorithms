export class DSU {
    #parents;
    #ranks;

    constructor(capacity = 100) {
        this.#parents = Array.from({length: capacity}, (_, idx) => idx);
        this.#ranks = new Array(capacity).fill(1);
    }

    find(x) {
        if (this.#parents[x] !== x) {
            this.#parents[x] = this.find(this.#parents[x]);
        }
        return this.#parents[x];
    }

    union(x, y) {
        x = this.find(x);
        y = this.find(y);

        if (x === y) {
            return 0;
        }
        if (this.#ranks[x] < this.#ranks[y]) {
            [x, y] = [y, x];
        }
        this.#parents[y] = x;
        this.#ranks[x] += this.#ranks[y]

        return 1;
    }
}

export function findRedundantConnection(edges) {
    const uf = new DSU(10);

    for (const edge of edges) {
        if (!uf.union(...edge)) {
            return edge;
        }
    }

    return [];
}

/**
 *
 * @param n {number} nodes count 0..n-1
 * @param edges {Array<Array<number>>}
 * @return {number}
 */
export function countComponents(n, edges) {
    const dsu = new DSU(n);
    let count = n;

    for (const [head, tail] of edges) {
        count -= dsu.union(head, tail);
    }

    return count;
}
