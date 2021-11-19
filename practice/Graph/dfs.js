import { BinaryTreeNode } from "../../common/tree.mjs";
import { print } from "../../common/print.mjs";

function preOrderDfs(root) {
    if (!root) return;

    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        print(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
}

function inOrderDfs(root) {
    if (!root) return;

    const stack = [];
    let curr = root;
    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        print(curr.val);
        curr = curr.right;
    }
}

function postOrderDfs(root) {
    if (!root) return;

    const stack = [root];
    let prev = null;
    while (stack.length > 0) {
        let curr = stack[stack.length - 1];
        if (prev === null || prev.left === curr || prev.right === curr) {
            if (curr.left !== null) {
                stack.push(curr.left);
            } else if (curr.right !== null) {
                stack.push(curr.right);
            } else {
                stack.pop();
                print(curr.val);
            }
        } else if (curr.left === prev) {
            if (curr.right !== null) {
                stack.push(curr.right);
            } else {
                stack.pop();
                print(curr.val);
            }
        } else if (curr.right === prev) {
            stack.pop();
            print(curr.val);
        }
        prev = curr;
    }
}

const test = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(3, null, new BinaryTreeNode(4)));
console.log('Pre-Order');
preOrderDfs(test);
console.log('In-Order');
inOrderDfs(test);
console.log('Post-Order');
postOrderDfs(test);
