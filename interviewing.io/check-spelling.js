function findExtensions(str) {
    const extensions = [];
    let start = 0,
        end = 0;

    while (end < str.length) {
        while (str[end] === str[end + 1]) {
            end++;
        }
        if (end - start >= 2) {
            extensions.push([start, end]);
        }
        end = start = end + 1;
    }

    return extensions;
}

function isValid(str) {
    return getPermutations(0, ['']).some(isInDict);

    function getPermutations(startIdx, prefixes) {
        if (startIdx >= str.length) return prefixes;
        let endIdx = startIdx;

        while (endIdx < str.length && str[endIdx] === str[endIdx + 1]) {
            endIdx++;
        }

        const substrings = [];
        if (endIdx - startIdx >= 2) {
            substrings.push(str[startIdx], str[startIdx] + str[startIdx]);
        } else {
            substrings.push(str.substring(startIdx, endIdx + 1));
        }
        prefixes = substrings.flatMap(
            substring => prefixes.map(prefix => prefix + substring)
        );

        return getPermutations(endIdx + 1, prefixes);
    }
}

const dict = ['hello'];
function isInDict(word) {
    return dict.includes(word);
}

let expected = [[2,4], [5,8]];
console.assert(findExtensions('hellloooo').every(([start, end], idx) => expected[idx][0] === start && expected[idx][1] === end), 'Should return 2 pairs');
expected = [[1,3]];
console.assert(findExtensions('heeello').every(([start, end], idx) => expected[idx][0] === start && expected[idx][1] === end), 'Should return 1 pair');
console.assert(findExtensions('abc').length === 0, 'Should be empty');
console.assert(findExtensions('').length === 0, 'Should be empty for empty string');

console.assert(isValid('hellloooo'), 'Should be valid');
console.assert(isValid('hello'), 'Should be valid');
console.assert(isValid('heeello'), 'Should be valid');
console.assert(!isValid('abc'), 'Should be invalid');
