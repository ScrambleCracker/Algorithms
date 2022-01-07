export function carPooling(trips, capacity) {
    const timestamp = new Array(1001).fill(0);

    for (const [numPassengers, from, to] of trips) {
        timestamp[from] += numPassengers;
        timestamp[to] -= numPassengers;
    }

    let emptySeats = capacity;
    for (const passengers of timestamp) {
        emptySeats -= passengers;
        if (emptySeats < 0) return false;
    }

    return true;
}
