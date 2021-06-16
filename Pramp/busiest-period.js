function findBusiestPeriod(data) {
    if (data.length === 1) return data[0];

    let maxVisitors = -1;
    let [prevPeriod, currVisitors] = data[0];
    let busiestPeriod = prevPeriod;

    for (let idx = 1; idx < data.length; idx++) {
        const [timestamp, visitors, isEnter] = data[idx];
        const isSamePeriod = timestamp === prevPeriod;
        if (!isSamePeriod) {
            if (maxVisitors < currVisitors) {
                maxVisitors = currVisitors;
                busiestPeriod = prevPeriod;
            }
            currVisitors = 0;
            prevPeriod = timestamp;
        }
        currVisitors += visitors * (isEnter === 1 ? 1 : -1);
    }

    return busiestPeriod;
}

let data, expected;

data = [
    [1487799425, 14, 1],
    [1487799425, 4,  0],
    [1487799425, 2,  0],
    [1487800378, 10, 1],
    [1487801478, 18, 0],
    [1487801478, 18, 1],
    [1487901013, 1,  0],
    [1487901211, 7,  1],
    [1487901211, 7,  0]
];
expected = 1487800378;

console.assert(expected === findBusiestPeriod(data));
