import { millisecondsInOneSecond } from '../constants.mjs';
import { createTheDate } from '../createTheDate.mjs';
import { toNative } from '../toNative.mjs';

function subtractSeconds(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (input) => subtractSeconds(input, second);
    }
    const [input, second] = args;
    const date = toNative(input);
    date.setTime(date.getTime() - (second * millisecondsInOneSecond));
    return createTheDate(date.getTime());
}

export { subtractSeconds };
