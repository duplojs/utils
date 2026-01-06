import { millisecondsInOneDay } from '../constants.mjs';
import { createTheDate } from '../createTheDate.mjs';
import { toNative } from '../toNative.mjs';

function subtractDays(...args) {
    if (args.length === 1) {
        const [day] = args;
        return (input) => subtractDays(input, day);
    }
    const [input, day] = args;
    const date = toNative(input);
    date.setTime(date.getTime() - (day * millisecondsInOneDay));
    return createTheDate(date.getTime());
}

export { subtractDays };
