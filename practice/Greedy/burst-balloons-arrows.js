export function findMinArrowShots(points) {
    if (points.length === 0) return 0;
    points.sort((a, b) => a[1] - b[1]);
    let currEnd = points[0][1], shots = 1;

    for (const [start, end] of points) {
        if (start > currEnd) {
            shots++;
            currEnd = end;
        }
    }

    return shots;
}
