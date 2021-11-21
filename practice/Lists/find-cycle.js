import { ListNode } from "../../common/list.mjs";
import { print } from "../../common/print.mjs";

function hasCycle(head) {
    let slow = head,
        fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) return true;
    }

    return false;
}

const cycleStart = new ListNode(2);
const withCycle = new ListNode(1, cycleStart);
cycleStart.next = new ListNode(3, new ListNode(4, cycleStart));

print(hasCycle(withCycle));
const withOutCycle = new ListNode(1, new ListNode(2, new ListNode(3)));
print(hasCycle(withOutCycle));

function findCycleStart(head) {
    let slow = head,
        fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) break;
    }
    if (fast === null || fast.next === null) return null;

    fast = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

print(findCycleStart(withCycle));
print(findCycleStart(withOutCycle));
