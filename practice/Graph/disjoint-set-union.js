export class DSU {
    #parents;
    #ranks;

    constructor(capacity = 100) {
        this.#parents = Array.from({length: capacity}, (_, idx) => idx);
        this.#ranks = new Array(capacity).fill(0);
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
            return false;
        } else if (this.#ranks[x] < this.#ranks[y]) {
            this.#parents[x] = y;
        } else if (this.#ranks[x] > this.#ranks[y]) {
            this.#parents[y] = x;
        } else {
            this.#parents[y] = x;
            this.#ranks[x]++;
        }
        return true;
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
