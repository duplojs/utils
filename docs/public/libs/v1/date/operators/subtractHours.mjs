import { millisecondInOneHour } from '../constants.mjs';
import { createTheDate } from '../createTheDate.mjs';
import { toNative } from '../toNative.mjs';

function subtractHours(...args) {
    if (args.length === 1) {
        const [hour] = args;
        return (input) => subtractHours(input, hour);
    }
    const [input, hour] = args;
    const date = toNative(input);
    date.setTime(date.getTime() - (hour * millisecondInOneHour));
    return createTheDate(date.getTime());
}

export { subtractHours };
