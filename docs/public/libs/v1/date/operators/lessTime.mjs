import { toTimeValue } from '../toTimeValue.mjs';

function lessTime(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => lessTime(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimeValue(input);
    const thresholdTimestamp = toTimeValue(threshold);
    return inputTimestamp <= thresholdTimestamp;
}

export { lessTime };
