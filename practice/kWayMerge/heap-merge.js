import { MinPriorityQueue } from "@datastructures-js/priority-queue";
import { ListNode } from "../../common/list.mjs";
import { print } from "../../common/print.mjs";

/**
 * @param lists ListNode[]
 * @return LinkedList
 */
function mergeLists(lists) {
    const heap = new MinPriorityQueue({priority: ({val}) => val});
    for (const head of lists) {
        if (head !== null) heap.enqueue(head);
    }

    const head = new ListNode();
    let tail = head;
    while (heap.size() > 1) { // if there is only 1 left no need to traverse it
        tail.next = heap.dequeue().element;
        tail = tail.next;
        if (tail.next !== null) {
            heap.enqueue(tail.next);
        }
    }
    if (heap.size()) {
        tail.next = heap.dequeue().element;
    }
    return head.next;
}

const lists = [
    new ListNode(1, new ListNode(2, new ListNode(3))),
    new ListNode(2),
    new ListNode(1, new ListNode(4)),
];
print(mergeLists(lists));
