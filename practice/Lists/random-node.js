export class RandomNode {
    #head = null;

    /**
     * TC: O(1), SC: O(1)
     * @param head
     */
    constructor(head) {
        this.#head = head;
    }

    /**
     * TC: O(N), SC: O(1)
     */
    getRandom() {
        let scope = 1, chosenVal = 0;
        let curr = this.#head;
        while (curr !== null) {
            if (Math.random() < 1 / scope) {
                chosenVal = curr.val;
            }
            scope++;
            curr = curr.next;
        }
        return chosenVal;
    }
}
