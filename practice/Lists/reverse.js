import {ListNode} from "../../common/list.mjs";
import {print} from "../../common/print.mjs";

function reverse(head) {
    let prev = null;
    while (head !== null) {
        const next = head.next;
        head.next = prev;
        [prev, head] = [head, next];
    }
    return prev
}

const test = new ListNode(1, new ListNode(2, new ListNode(3)));
print(reverse(test));
