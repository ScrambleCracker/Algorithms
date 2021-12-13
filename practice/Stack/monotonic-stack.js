/**
 * We can use stack for heights to the right.
 * As far as we don't care about other values, stack is changed to variable
 * @param heights
 * @return {*[]}
 */
export function findBuildings(heights) {
    let maxHeight = -1;
    const seaViews = [];

    for (let i = heights.length - 1; i >= 0; --i) {
        if (heights[i] > maxHeight) {
            seaViews.push(i);
            maxHeight = heights[i];
        }
    }

    return seaViews.reverse();
}

/**
 * And here we actually need to keep all people to the right, who potentially visible
 * @param heights
 * @return {number[]}
 */
export function canSeePersonsCount(heights) {
    const output = Array.from(heights, () => 0);
    const stack = [];

    for (let i = heights.length - 1; i >= 0; --i) {
        while (stack.length && heights[i] > stack[stack.length - 1]) {
            stack.pop();
            ++output[i];
        }
        if (stack.length && heights[i] <= stack[stack.length - 1]) {
            ++output[i];
        } else {
            output[i] += stack.length;
        }
        stack.push(heights[i]);
    }

    return output;
}
