import { toTimeValue } from './toTimeValue.mjs';
import { TheTime } from './theTime.mjs';

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
        .map(TheTime.new);
}

export { sortTimes };
