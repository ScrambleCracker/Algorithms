export class TreeNode {
    val;
    children = [];

    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

export class BinaryTreeNode {
    val;
    left = null;
    right = null;

    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
