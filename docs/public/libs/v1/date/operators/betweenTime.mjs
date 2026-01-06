import { toTimestamp } from '../toTimestamp.mjs';

function betweenTime(...args) {
    if (args.length === 2) {
        const [greater, less] = args;
        return (input) => betweenTime(input, greater, less);
    }
    const [input, greater, less] = args;
    const inputTimestamp = toTimestamp(input);
    const greaterTimestamp = toTimestamp(greater);
    const lessTimestamp = toTimestamp(less);
    return inputTimestamp >= greaterTimestamp && inputTimestamp <= lessTimestamp;
}

export { betweenTime };
