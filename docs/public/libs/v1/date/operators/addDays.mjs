import { toNative } from '../toNative.mjs';
import { millisecondsInOneDay } from '../constants.mjs';
import { createTheDate } from '../createTheDate.mjs';

function addDays(...args) {
    if (args.length === 1) {
        const [day] = args;
        return (input) => addDays(input, day);
    }
    const [input, day] = args;
    const date = toNative(input);
    date.setTime(date.getTime() + (day * millisecondsInOneDay));
    return createTheDate(date.getTime());
}

export { addDays };
