import { toTimeValue } from '../toTimeValue.mjs';

function lessThanTime(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => lessThanTime(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimeValue(input);
    const thresholdTimestamp = toTimeValue(threshold);
    return inputTimestamp < thresholdTimestamp;
}

export { lessThanTime };
