/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
export function asteroidCollision(asteroids) {
    const stack = [];
    for (const asteroid of asteroids) {
        collision: {
            while (stack.length > 0 && asteroid < 0 && 0 < peek(stack)) {
                if (peek(stack) < -asteroid) {
                    stack.pop();
                    continue;
                } else if (peek(stack) === -asteroid) {
                    stack.pop();
                }
                break collision;
            }
            stack.push(asteroid);
        }
    }
    return stack;
}

function peek(stack) {
    return stack[stack.length - 1];
}
