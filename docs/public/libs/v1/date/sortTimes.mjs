import { createTheTime } from './createTheTime.mjs';
import { toTimeValue } from './toTimeValue.mjs';

function sortTimes(...args) {
    if (args.length === 1) {
        const [type] = args;
        return (array) => sortTimes(array, type);
    }
    const [array, type] = args;
    return array
        .map(toTimeValue)
        .sort(type === "DSC"
        ? (first, second) => second - first
        : (first, second) => first - second)
        .map(createTheTime);
}

export { sortTimes };
