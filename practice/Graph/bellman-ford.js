/**
 * Bellman-Ford algorithm
 * @param edges (u,v,w)
 * @param n total number of vertices in a graph 1..n
 * @param k source from which distances to other nodes is calculated
 */
function getDistancesFromSource(edges, n, k) {
    const distances = new Array(n + 1).fill(Infinity);
    distances[0] = distances[k] = 0; // distance to itself is 0, 0 index is not used

    for (let node = 1; node <= n; ++node) {
        for (const [source, target, weight] of edges) {
            distances[target] = Math.max(
                distances[target],
                distances[source] + weight
            );
        }
    }

    return distances;
}
