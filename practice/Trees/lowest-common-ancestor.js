export class TreeNode {
    val;
    left = null;
    right = null;
    parent = null;
}

/**
 * @param p {TreeNode}
 * @param q {TreeNode}
 *
 * @return {TreeNode}
 */
export function lowestCommonAncestorWithParent(p, q) {
    const ancestors = new Set();

    while (p !== null) {
        if (p === q) return q;
        ancestors.add(p);
        p = p.parent;
    }

    while (q !== null) {
        if (ancestors.has(q)) return q;
        q = q.parent;
    }

    return null;
}

export function lowestCommonAncestorRecursive(root, p, q) {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestorRecursive(root.left, p, q);
    const right = lowestCommonAncestorRecursive(root.right, p, q);

    return left && right ? root : left ?? right;
}

export function lowestCommonAncestor(root, p, q) {
    if (!root || !p || !q) return null;
    let nodesFound = 0;
    const lca = findLowestCommonAncestor(root, p, q);
    return nodesFound === 2 ? lca : null;

    function findLowestCommonAncestor(root, p, q) {
        if (root === p || root === q) nodesFound++;
        if (!root) return root;
        const left = findLowestCommonAncestor(root.left, p, q);
        const right = findLowestCommonAncestor(root.right, p, q);
        if (root === p || root === q) return root;
        if (left !== null && right !== null) return root;
        return left ?? right;
    }
}
