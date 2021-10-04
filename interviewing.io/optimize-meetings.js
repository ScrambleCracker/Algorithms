class Meeting {
    name = '';
    hours = 0;

    constructor(name, hours) {
        this.name = name;
        this.hours = hours;
    }

    isValid() {
        return this.hours > 0;
    }
}

/**
 * Returns the list of meetings with the closest sum to available hours
 * Time: O(N^2)
 * Space: O(N^2)
 *
 * @param Meeting[] meetings
 * @param number workHours
 * @return Meeting[]
 */
function optimizeMeetings(meetings, workHours) {
    if (workHours <= 0
        || !Array.isArray(meetings)
        || meetings.some(meeting => !meeting.isValid())
    ) {
        throw new Error('Invalid input');
    }

    function opt(idx, hours) {
        if (hours <= 0 || idx >= meetings.length) return [0, []];
        const currHours = meetings[idx].hours;
        const [takeHours, takeList] = opt(idx + 1, hours - currHours);
        const [skipHours, skipList] = opt(idx + 1, hours);

        if (currHours <= hours && takeHours + currHours > skipHours) {
            return [takeHours + currHours, [meetings[idx], ...takeList]];
        } else {
            return [skipHours, skipList];
        }
    }
    const [_, maxList] = opt(0, workHours);
    return maxList;
}

const testData = [new Meeting('1', 5), new Meeting('2', 2), new Meeting('3', 1)];

console.log(optimizeMeetings(testData, 3));
console.log(optimizeMeetings(testData, 6));
console.assert(optimizeMeetings([], 7).length === 0);
try {
    optimizeMeetings([new Meeting('', 0)], 3);
} catch (err) {
    console.assert(err.message === 'Invalid input', 'Did not throw error with invalid meeting');
}
try {
    optimizeMeetings(new Meeting('', 1), 3);
} catch (err) {
    console.assert(err.message === 'Invalid input', 'Did not throw error with non-array meetings');
}
try {
    optimizeMeetings([new Meeting('', 3)], -3);
} catch (err) {
    console.assert(err.message === 'Invalid input', 'Did not throw error with invalid workHours');
}
