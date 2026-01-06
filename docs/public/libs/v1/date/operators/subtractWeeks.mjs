import { millisecondInOneWeek } from '../constants.mjs';
import { createTheDate } from '../createTheDate.mjs';
import { toNative } from '../toNative.mjs';

function subtractWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => subtractWeeks(input, week);
    }
    const [input, week] = args;
    const date = toNative(input);
    date.setTime(date.getTime() - (week * millisecondInOneWeek));
    return createTheDate(date.getTime());
}

export { subtractWeeks };
