import { millisecondInOneWeek } from '../constants.mjs';
import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function addWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => addWeeks(input, week);
    }
    const [input, week] = args;
    const timestamp = input instanceof TheDate
        ? input.getTime()
        : toTimestamp(input);
    return TheDate.new(timestamp + (week * millisecondInOneWeek));
}

export { addWeeks };
