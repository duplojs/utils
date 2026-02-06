import { millisecondInOneMinute } from '../constants.mjs';
import { TheDate } from '../theDate.mjs';
import { toTimestamp } from '../toTimestamp.mjs';

function subtractMinutes(...args) {
    if (args.length === 1) {
        const [minute] = args;
        return (input) => subtractMinutes(input, minute);
    }
    const [input, minute] = args;
    return TheDate.new(toTimestamp(input) - (minute * millisecondInOneMinute));
}

export { subtractMinutes };
