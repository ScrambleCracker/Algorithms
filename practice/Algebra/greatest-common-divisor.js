export function gcd(x, y) {
    return x === 0 ? y : gcd(y % x, x);
}
