import { toTimestamp } from '../toTimestamp.mjs';

function less(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => less(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimestamp(input);
    const thresholdTimestamp = toTimestamp(threshold);
    return inputTimestamp <= thresholdTimestamp;
}

export { less };
