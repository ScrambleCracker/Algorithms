import { Queue } from "@datastructures-js/queue";
import { print } from "../../common/print.mjs";
import { TreeNode } from "../../common/tree.mjs";

const adjList = [
    [1, 2],
    [0, 3],
    [0, 4],
    [1],
    [1]
];

function bfs(node) {
    const visited = new Set();
    const queue = new Queue();
    queue.enqueue(node);

    while (!queue.isEmpty()) {
        const node = queue.dequeue();
        visited.add(node);
        visit(node); // process node according to the task
        for (const child of adjList[node]) {
            if (!visited.has(child)) {
                queue.enqueue(child);
            }
        }
    }
}

function visit(node) {
    print(node);
}

bfs(0);

function levelBfs(root) {
    const queue = new Queue();
    queue.enqueue(root);
    let level = 0;

    while (!queue.isEmpty()) {
        let size = queue.size();
        level++;
        const levelVals = [];
        while (size--) {
            const node = queue.dequeue();
            levelVals.push(node.val);
            for (const child of node.children) {
                queue.enqueue(child);
            }
        }
        visit([level, levelVals]);
    }
}

const root = new TreeNode(1, [
    new TreeNode(2),
    new TreeNode(3, [new TreeNode(4)]),
]);

levelBfs(root);
