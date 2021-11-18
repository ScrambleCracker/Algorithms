function findBridges(graph, n) {
    const ids = new Array(n).fill(0);
    const lowLinks = Array.from(ids);
    const visited = new Array(n).fill(false);
    const bridges = [];

    dfs(0, 0, -1);

    return bridges;

    function dfs(id, node, prev) {
        visited[node] = true;
        lowLinks[node] = id;
        ids[node] = id;
        ++id

        for (const next of graph[node]) {
            if (next === prev) {
                continue;
            }
            if (!visited[next]) {
                dfs(id, next, node);
                lowLinks[node] = Math.min(lowLinks[node], lowLinks[next]);
                if (ids[node] < lowLinks[next]) {
                    bridges.push([node, next]);
                }
            } else {
                lowLinks[node] = Math.min(lowLinks[node], ids[next]);
            }
        }
    }
}

const graph = [
    [1,2],
    [0,2,3],
    [0,1],
    [1],
];

console.log(findBridges(graph));
