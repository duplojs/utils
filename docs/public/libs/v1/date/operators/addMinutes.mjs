import { millisecondInOneMinute } from '../constants.mjs';
import { createTheDate } from '../createTheDate.mjs';
import { toNative } from '../toNative.mjs';

function addMinutes(...args) {
    if (args.length === 1) {
        const [minute] = args;
        return (input) => addMinutes(input, minute);
    }
    const [input, minute] = args;
    const date = toNative(input);
    date.setTime(date.getTime() + (minute * millisecondInOneMinute));
    return createTheDate(date.getTime());
}

export { addMinutes };
