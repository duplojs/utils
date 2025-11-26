import { toTimestamp } from '../toTimestamp.mjs';

function greater(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => greater(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimestamp(input);
    const thresholdTimestamp = toTimestamp(threshold);
    return inputTimestamp >= thresholdTimestamp;
}

export { greater };
