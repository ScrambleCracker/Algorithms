import { MinPriorityQueue, MaxPriorityQueue } from "@datastructures-js/priority-queue";
import { print } from "../../common/print.mjs";

class MedianFinder {
    min = new MinPriorityQueue();
    max = new MaxPriorityQueue();

    addNum(num) {
        if (this.max.isEmpty() || this.max.front().element >= num) {
            this.max.enqueue(num);
        } else {
            this.min.enqueue(num);
        }

        if (this.max.size() > this.min.size() + 1) {
            this.min.enqueue(this.max.dequeue().element);
        } else if (this.max.size() < this.min.size()) {
            this.max.enqueue(this.min.dequeue().element);
        }
    }

    getMedian() {
        if (this.max.isEmpty() && this.min.isEmpty()) {
            return 0;
        }
        if (this.max.size() === this.min.size()) {
            return (this.min.front().element + this.max.front().element) / 2;
        }

        return this.max.front().element;
    }
}

const test = new MedianFinder();
for (let num = 1; num < 10; ++num) {
    test.addNum(num);
    print(test.getMedian());
}
