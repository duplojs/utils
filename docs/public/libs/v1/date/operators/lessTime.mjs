import { toTimestamp } from '../toTimestamp.mjs';

function lessTime(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => lessTime(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimestamp(input);
    const thresholdTimestamp = toTimestamp(threshold);
    return inputTimestamp <= thresholdTimestamp;
}

export { lessTime };
