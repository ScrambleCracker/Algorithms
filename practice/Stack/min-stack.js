/**
 * Regular stack which can give Min value in O(1)
 */
export class MinStack {
    stack = [];

    push(num) {
        const min = Math.min(num, this.getMin());
        this.stack.push([num, min]);
    }

    pop() {
        return this.stack.pop()?.[0];
    }

    getMin() {
        return this.stack.length > 0
            ? this.stack.at(-1)[1]
            : Infinity;
    }
}
