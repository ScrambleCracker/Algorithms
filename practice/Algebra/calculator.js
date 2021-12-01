/**
 * @param s {string} supports only "+-*\/" operations, no unary and parenthesis
 * @return {number}
 */
export function basicCalc(s) {
    let inner = 0,
        outer = 0,
        result = 0,
        opt = '+';
    for (const ch of s + '+') {
        if (ch === ' ') continue;
        if (isDigit(ch)) {
            inner = 10 * inner + parseInt(ch);
            continue;
        }

        if (opt === '+') {
            result += outer;
            outer = inner;
        } else if (opt === '-') {
            result += outer;
            outer = -inner;
        } else if (opt === '*') {
            outer *= inner;
        } else if (opt === '/') {
            outer = outer / inner | 0;
        }
        inner = 0;
        opt = ch;
    }

    return result + outer;

    function isDigit(ch) {
        const code = ch.charCodeAt(0) - '0'.charCodeAt(0);
        return code >= 0 && code < 10;
    }
}

/**
 * @param s {string} supports only "+-", parenthesis and unary
 * @return {number}
 */
export function calcWithParenthesis(s) {
    const OFFSET = '0'.charCodeAt(0);
    const len = s.length;
    const stack = [];
    let operand = 0, position = 0;

    for (let i = len - 1; i >= 0; i--) {
        const ch = s[i];
        if (isDigit(i)) {
            operand += (10 ** position) * parseInt(ch);
            position++;
        } else if (ch !== ' ') {
            if (position !== 0) {
                stack.push(operand);
                position = 0;
                operand = 0;
            }
            if (ch === '(') {
                const res = evaluateExpression();
                stack.pop(); // pop closing parentheses
                stack.push(res);
            } else {
                stack.push(ch);
            }
        }
    }

    if (position !== 0) {
        stack.push(operand);
    }

    return evaluateExpression();

    function isDigit(idx) {
        const charCode = s.charCodeAt(idx) - OFFSET;
        return charCode >= 0 && charCode < 10;
    }

    function evaluateExpression() {
        if (stack.length === 0 || !Number.isFinite(peek())) {
            stack.push(0);
        }

        let res = stack.pop();

        while (stack.length > 0 && peek() !== ')') {
            const sign = stack.pop();

            if (sign === '+') {
                res += stack.pop();
            } else {
                res -= stack.pop();
            }
        }

        return res;
    }

    function peek() {
        return stack[stack.length - 1];
    }
}
