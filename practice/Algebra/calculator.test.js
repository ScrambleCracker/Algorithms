import { basicCalc, calcWithParenthesis } from "./calculator";

describe('Calculators', () => {
    it.each([
        ['3 + 2*3', 9],
        ['3 - 3 / 2', 2],
        ['124 - 5     * 5*5', -1],
        ['124 - 5*5*5 + 2', 1],
        ['+5', 5],
        ['-5', -5],
    ])('should evaluate expression', (expr, expected) => {
        expect(basicCalc(expr)).toBe(expected);
    });

    it.each([
        ['3 - (2 + 2)', -1],
        ['-3 + 5', 2],
    ])('should evaluate expressions with parenthesis', (expr, expected) => {
        expect(calcWithParenthesis(expr)).toBe(expected);
    });
});
