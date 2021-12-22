import {
    lowestCommonAncestorWithParent,
    lowestCommonAncestorRecursive,
    TreeNode, lowestCommonAncestor
} from "./lowest-common-ancestor.js";

describe('Lowest Common Ancestor', () => {
    it('should find common ancestor', () => {
        const root = new TreeNode();
        root.val = 1;
        root.left = new TreeNode();
        root.right = new TreeNode();

        root.right.parent = root.left.parent = root;
        expect(lowestCommonAncestorWithParent(root.left, root.right)).toEqual(root);
        expect(lowestCommonAncestorRecursive(root, root.left, root.right)).toEqual(root);
        expect(lowestCommonAncestor(root, root.left, root.right)).toEqual(root);
    });

    it('should find common ancestor when it is one of nodes', () => {
        const root = new TreeNode();
        root.val = 1;
        root.right = new TreeNode();

        root.right.parent = root;
        expect(lowestCommonAncestorWithParent(root, root.right)).toEqual(root);
        expect(lowestCommonAncestorRecursive(root, root, root.right)).toEqual(root);
        expect(lowestCommonAncestor(root, root, root.right)).toEqual(root);
    });

    it('should return null if no LCA', () => {
        const root = new TreeNode();
        root.val = 1;
        const p = root.right = new TreeNode();
        const q = new TreeNode();

        expect(lowestCommonAncestor(root, p, q)).toBeNull();
    });
});
