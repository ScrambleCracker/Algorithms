/**
 * Floyd-Warshall algorithm
 *
 * @param n total number of nodes 0..n-1
 * @param edges (source, target, distance)
 */
export function getMinDistances(n, edges) {
    const distances = Array.from({length: n}, () => new Array(n).fill(Infinity));
    for (let node = 0; node < n; ++node) {
        // distance to itself is 0
        distances[node][node] = 0;
    }
    for (const [source, target, distance] of edges) {
        // already known distances
        distances[source][target] = distance;
        // don't forget to add reverse connection if graph is undirected
        distances[target][source] = distance;
    }

    for (let mid = 0; mid < n; ++mid) {
        for (let source = 0; source < n; ++source) {
            for (let target = 0; target < n; ++target) {
                distances[source][target] = Math.min(
                    distances[source][target],
                    distances[source][mid] + distances[mid][target]
                );
            }
        }
    }

    return distances;
}
