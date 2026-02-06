import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function subtractMilliseconds(...args) {
    if (args.length === 1) {
        const [millisecond] = args;
        return (input) => subtractMilliseconds(input, millisecond);
    }
    const [input, millisecond] = args;
    return TheDate.new(toTimestamp(input) - millisecond);
}

export { subtractMilliseconds };
