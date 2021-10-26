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
    const extensions = findExtensions(str);
    if (extensions.length === 0) return isInDict(str);

    return getPermutations(str, extensions).some(isInDict);
}

function getPermutations(str, extensions) {
    const prefix = str.substring(0, extensions[0][0]);
    extensions = extensions.map(([start, end]) => str[start]);

    return generatePermutation(0, [prefix]);

    function generatePermutation(index, prefixes) {
        if (index === extensions.length) return prefixes;

        prefixes = [
            extensions[index],
            extensions[index] + extensions[index],
        ].flatMap(
            letters => prefixes.map(prefix => prefix + letters)
        );
        return generatePermutation(index + 1, prefixes);
    }
}

const dict = ['hello'];
function isInDict(word) {
    return dict.includes(word);
}

const expected = [[2,4], [5,8]];
console.assert(findExtensions('hellloooo').every(([start, end], idx) => expected[idx][0] === start && expected[idx][1] === end), 'Should return 2 pairs');
console.assert(findExtensions('abc').length === 0, 'Should be empty');
console.assert(findExtensions('').length === 0, 'Should be empty for empty string');

console.assert(isValid('hellloooo'), 'Should be valid');
console.assert(isValid('hello'), 'Should be valid');
console.assert(!isValid('abc'), 'Should be invalid');
