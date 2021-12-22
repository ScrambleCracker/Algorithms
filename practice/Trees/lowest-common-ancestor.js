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
