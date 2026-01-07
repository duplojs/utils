import { toTimeValue } from '../toTimeValue.mjs';

function betweenTime(...args) {
    if (args.length === 2) {
        const [greater, less] = args;
        return (input) => betweenTime(input, greater, less);
    }
    const [input, greater, less] = args;
    const inputTimestamp = toTimeValue(input);
    const greaterTimestamp = toTimeValue(greater);
    const lessTimestamp = toTimeValue(less);
    return inputTimestamp >= greaterTimestamp && inputTimestamp <= lessTimestamp;
}

export { betweenTime };
