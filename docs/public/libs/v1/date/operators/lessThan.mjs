import { toTimestamp } from '../toTimestamp.mjs';

function lessThan(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => lessThan(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimestamp(input);
    const thresholdTimestamp = toTimestamp(threshold);
    return inputTimestamp < thresholdTimestamp;
}

export { lessThan };
