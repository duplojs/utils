import { toTimestamp } from '../toTimestamp.mjs';

function greaterTime(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => greaterTime(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimestamp(input);
    const thresholdTimestamp = toTimestamp(threshold);
    return inputTimestamp >= thresholdTimestamp;
}

export { greaterTime };
