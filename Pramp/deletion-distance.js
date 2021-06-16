function deletionDistance(str1, str2) {
    if (str1.length < str2.length) {
        [str1, str2] = [str2, str1];
    }
    const [n, m] = [str1.length, str2.length];
    if (n === 0 || m === 0) return Math.max(n, m);
    let prevMemo = new Array(m + 1);
    let currMemo = new Array(m + 1);

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i === 0) currMemo[j] = j;
            else if (j === 0) currMemo[j] = i;
            else if (str1[i - 1] === str2[j - 1]) currMemo[j] = prevMemo[j - 1];
            else currMemo[j] = 1 + Math.min(prevMemo[j], currMemo[j-1]);
        }
        prevMemo = currMemo;
        currMemo = new Array(m + 1);
    }
    return prevMemo[m];
}


function deletionDistanceRecursive(str1, str2) {
    const [n, m] = [str1.length, str2.length];
    if (n === 0 || m === 0) return Math.max(n, m);

    return str1[0] === str2[0]
        ? deletionDistanceRecursive(str1.substring(1), str2.substring(1))
        : 1 + Math.min(
            deletionDistanceRecursive(str1.substring(1), str2),
            deletionDistanceRecursive(str1, str2.substring(1))
        );
}

console.assert(3 === deletionDistance('hit', 'heat'));
console.assert(0 === deletionDistance('some', 'some'));
console.assert(9 === deletionDistance('some', 'thing'));
console.assert(5 === deletionDistance('', 'thing'));
console.assert(0 === deletionDistance('', ''));

console.assert(3 === deletionDistanceRecursive('hit', 'heat'));
console.assert(0 === deletionDistanceRecursive('some', 'some'));
console.assert(9 === deletionDistanceRecursive('some', 'thing'));
console.assert(5 === deletionDistanceRecursive('', 'thing'));
console.assert(0 === deletionDistanceRecursive('', ''));
