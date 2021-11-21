import { Queue } from '@datastructures-js/queue';

function topologicalSort(adjList) {
    const inDegree = new Map(); // Map<vertex, count>

    for (let vertex in adjList) {
        if (!inDegree.has(vertex)) {
            inDegree.set(vertex, 0);
        }
        const children = adjList[vertex];
        for (const child of children) {
            const count = inDegree.get(child) ?? 0;
            inDegree.set(child, count + 1);
        }
    }

    const sources = new Queue();
    for (const [vertex, count] of inDegree.entries()) {
        if (count === 0) {
            sources.enqueue(vertex);
        }
    }

    const output = [];
    while (!sources.isEmpty()) {
        const vertex = sources.dequeue();
        output.push(vertex);

        for (const child of adjList[vertex]) {
            const count = inDegree.get(child) - 1;
            inDegree.set(child, count);
            if (count === 0) {
                sources.enqueue(child);
            }
        }
    }
    return output;
}

const graph = {
    '0': ['1', '2'],
    '3': ['2'],
    '1': ['4'],
    '4': [],
    '2': [],
};

console.log(topologicalSort(graph));
