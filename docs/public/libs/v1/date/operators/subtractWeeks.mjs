import { millisecondInOneWeek } from '../constants.mjs';
import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function subtractWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => subtractWeeks(input, week);
    }
    const [input, week] = args;
    return TheDate.new(toTimestamp(input) - (week * millisecondInOneWeek));
}

export { subtractWeeks };
