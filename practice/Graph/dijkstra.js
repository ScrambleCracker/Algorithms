import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * Dijkstra's algorithm
 * @param graph Array<Array<Pair<target, weight>>>
 * @param start Number
 * @param end Number
 */
export function findShortestPath(graph, start, end) {
    const pq = new MinPriorityQueue({ priority: ([dist]) => dist });
    const distances = new Array(graph.length).fill(Infinity);
    distances[start] = 0;
    pq.enqueue([0, start]);

    while (!pq.isEmpty()) {
        const [dist, head] = pq.dequeue().element;
        for (const [tail, weight] of graph[head]) {
            const nextWeight = dist + weight;
            if (nextWeight < distances[tail]) {
                distances[tail] = nextWeight;
                pq.enqueue([nextWeight, tail]);
            }
        }
    }

    return distances[end];
}
