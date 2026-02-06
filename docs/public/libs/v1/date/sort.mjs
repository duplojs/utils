import { toTimestamp } from './toTimestamp.mjs';
import { TheDate } from './theDate.mjs';

function sort(...args) {
    if (args.length === 1) {
        const [type] = args;
        return (array) => sort(array, type);
    }
    const [array, type] = args;
    return array
        .map(toTimestamp)
        .sort(type === "DSC"
        ? (first, second) => second - first
        : (first, second) => first - second)
        .map(TheDate.new);
}

export { sort };
