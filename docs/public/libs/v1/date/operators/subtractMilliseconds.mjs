import { createTheDate } from '../createTheDate.mjs';
import { toNative } from '../toNative.mjs';

function subtractMilliseconds(...args) {
    if (args.length === 1) {
        const [millisecond] = args;
        return (input) => subtractMilliseconds(input, millisecond);
    }
    const [input, millisecond] = args;
    const date = toNative(input);
    date.setTime(date.getTime() - millisecond);
    return createTheDate(date.getTime());
}

export { subtractMilliseconds };
